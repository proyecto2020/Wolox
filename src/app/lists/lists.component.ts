import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../app-core/core/services/general.service';
import { PersistenceInfoService } from 'src/app/utilities/persistence/persistence-info.service';
import { ListsObject } from './entities/lists.object';

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
    private readonly persistence: PersistenceInfoService
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
    this.generalService
      .getInformationTechnologies()
      .subscribe((rs: Array<ListsObject>) => {
        this.lstTecnologias = rs;
        console.log(this.lstTecnologias);
      });
  }

  /**
   * Selecciona la tecnologia favorita, validando que ya exista.
   *
   * @param {*} item
   * @memberof ListsComponent
   */
  favorito(item) {
    const arrayTecnologiasFavoritas = this.obtenerTecnologiasFavoritas();
    if (arrayTecnologiasFavoritas.indexOf(item.tech) < 0) {
      arrayTecnologiasFavoritas.push(item.tech);
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
