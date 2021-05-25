import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../app-core/core/services/general.service';
import { PersistenceInfoService } from 'src/app/utilities/persistence/persistence-info.service';
import { ListsObject } from './entities/lists.object';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lstTecnologias: Array<ListsObject>;
  filterTech: string = '';
  constructor(
    private generalService: GeneralService,
    private readonly persistence: PersistenceInfoService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.obtenerInformacionTecnologias();
    this.obtenerTecnologiasFavoritas();
  }

  /**
   * Valida que halla información en local Storage.
   *
   * @return {*}
   * @memberof ListsComponent
   */
  obtenerTecnologiasFavoritas() {
    let tecnoligasfavoritas = this.persistence.getInfo('tecnologias');
    if (
      tecnoligasfavoritas === null ||
      tecnoligasfavoritas === '' ||
      tecnoligasfavoritas === undefined
    ) {
      tecnoligasfavoritas = '[]';
    }
    const arrayTecnologiasFavoritas = JSON.parse(
      tecnoligasfavoritas
    ) as Array<string>;
    return arrayTecnologiasFavoritas;
  }

  /**
   * Obtiene la informacion de las listas.
   *
   * @memberof ListsComponent
   */
  obtenerInformacionTecnologias() {
    this.spinner.show();
    this.generalService
      .getInformationTechnologies()
      .subscribe((rs: Array<ListsObject>) => {
        this.lstTecnologias = rs;
        if (this.lstTecnologias) {
          setTimeout(() => {
            this.spinner.hide();
          }, 5000);
        }
      });
  }

  /**
   * Selecciona la tecnologia favorita, validando que ya exista.
   *
   * @param {*} item
   * @memberof ListsComponent
   */
  favorito(item) {
    item.puntos = 1;
    const arrayTecnologiasFavoritas = this.obtenerTecnologiasFavoritas();
    if (arrayTecnologiasFavoritas.indexOf(item.tech) < 0) {
      arrayTecnologiasFavoritas.push(item);
      this.persistence.setInfo(
        'tecnologias',
        JSON.stringify(arrayTecnologiasFavoritas)
      );
    }
  }

  /**
   * Ordenar Asc
   *
   * @memberof ListsComponent
   */
  ordenarAscendente() {
    this.lstTecnologias.sort((itemOne, itemTwo) =>
      itemOne.tech.localeCompare(itemTwo.tech)
    );
  }

  /**
   * Ordenas Desc
   *
   * @memberof ListsComponent
   */
  ordenarDescendente() {
    this.lstTecnologias.sort((temOne, itemTwo) =>
      itemTwo.tech.localeCompare(temOne.tech)
    );
  }
}
