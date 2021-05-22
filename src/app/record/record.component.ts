import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from '../app-core/core/services/general.service';
import { GenericMessage } from '../app-core/genericmessage';
import { DefaultConfig } from '../utilities/defaultconfig';
import { ObjectRecord } from './entities/record.object';
import { PersistenceInfoService } from '../utilities/persistence/persistence-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  recordForm: FormGroup;
  genericMessage: GenericMessage;
  listGeneralInformacion: any;
  listPaises: Array<any>;
  listDepartamentos: Array<any>;
  submit: boolean;
  ulrTerminos: string;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly generalService: GeneralService,
    private spinner: NgxSpinnerService,
    private persistence: PersistenceInfoService,
    private router: Router
  ) {
    this.genericMessage = new GenericMessage();
    this.submit = false;
    this.ulrTerminos = DefaultConfig.DEFAULT_CONFIG_APP.DefaultUrlTerminos;
  }

  ngOnInit(): void {
    this.inciarFormulario();
    this.obtenerInformacionPais();
  }

  /**
   *Obtiene la información de los paises.
   *
   * @memberof RecordComponent
   */
  obtenerInformacionPais() {
    this.generalService.getInformation().subscribe((rs: any) => {
      this.listGeneralInformacion = rs;
      this.listPaises = this.listGeneralInformacion.Paises;
    });
  }

  /**
   *Filtra los departamentos.
   *
   * @param {*} event
   * @memberof RecordComponent
   */
  obtenerDepartamentos(event) {
    this.listDepartamentos = this.listGeneralInformacion.Dapartamentos.filter(
      (x) => x.idPadre === Number(event.target.value)
    );
  }

  /**
   *Inica la instancia del formulario.
   *
   * @memberof RecordComponent
   */
  inciarFormulario() {
    this.recordForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      pais: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern('^([0-9]*)'),
          Validators.maxLength(10),
        ],
      ],
      contrasenia: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]*)'),
          Validators.minLength(6),
        ],
      ],
      dobleContrasenia: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]*)'),
          Validators.minLength(6),
        ],
      ],
      terminos: ['', Validators.required],
    });
  }
  get genericControl() {
    return this.recordForm.controls;
  }

  /**
   *Validad la igualdad de la contraseña.
   *
   * @param {*} event
   * @memberof RecordComponent
   */
  validarContrasenia(event) {
    if (
      this.recordForm.controls.contrasenia.value !== '' &&
      this.recordForm.controls.dobleContrasenia.value !== '' &&
      this.recordForm.controls.contrasenia.valid &&
      this.recordForm.controls.dobleContrasenia.valid
    ) {
      if (
        this.recordForm.controls.contrasenia.value !== event.target.value ||
        this.recordForm.controls.dobleContrasenia.value !== event.target.value
      ) {
        this.genericMessage.showMessage(
          'error',
          DefaultConfig.DEFAULT_TEXT_APP.coincidenciaPassword,
          3000,
          'Oops...'
        );
      }
    }
  }

  /**
   *crea el registro.
   *
   * @memberof RecordComponent
   */
  guardar() {
    if (this.recordForm.invalid || this.submit === true) {
      this.submit = true;
    } else {
      this.spinner.show();
      let item = new ObjectRecord();
      item = this.prepararInformacion();
      this.generalService.saveRecord(item).subscribe((rs: any) => {
        if (rs) {
          setTimeout(() => {
            this.spinner.hide();
            this.almacenarInformacion(item);
          }, 5000);
        }
      });
    }
  }

  /**
   *almacena la informacion incriptada en el sesion storage.
   *
   * @param {*} item
   * @memberof RecordComponent
   */
  almacenarInformacion(item) {
    this.persistence.setInfo('record', JSON.stringify(item));
    this.showMessage();
  }

  /**
   *Renderiza el mensaje luego del cierre del spiner y limpia el formulario.
   *
   * @memberof RecordComponent
   */
  showMessage(): void {
    this.genericMessage.showMessage(
      'success',
      DefaultConfig.DEFAULT_TEXT_APP.guardoCorrectamente,
      3000,
      'Creado'
    );
    this.recordForm.reset();
    this.router.navigate(['/lists']);
  }

  /**
   *Prepara la información.
   *
   * @return {*}  {ObjectRecord}
   * @memberof RecordComponent
   */
  prepararInformacion(): ObjectRecord {
    const record = new ObjectRecord();
    record.name = this.recordForm.controls.nombre.value;
    record.last_name = this.recordForm.controls.apellido.value;
    record.country = this.recordForm.controls.pais.value;
    record.province = this.recordForm.controls.departamento.value;
    record.mail = this.recordForm.controls.email.value;
    record.password = this.recordForm.controls.contrasenia.value;
    return record;
  }

  /**
   * valida el campo de términos este checkeado.
   *
   * @param {*} event
   * @memberof RecordComponent
   */
  validarTerminos(event) {
    if (event.currentTarget.checked === false) {
      this.submit = true;
      let controlTerminos = this.recordForm.get('terminos');
      controlTerminos.setValidators([Validators.required]);
      controlTerminos.updateValueAndValidity();
    } else {
      this.submit = false;
    }
  }
}
