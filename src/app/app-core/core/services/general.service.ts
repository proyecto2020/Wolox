import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ObjectRecord } from 'src/app/record/entities/record.object';
import * as data from 'src/data.paises.json';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  baseUrl: string;
  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  /**
   * Obtiene la información de los paises con sus respectivos departamentos.
   *
   * @return {*}
   * @memberof GeneralService
   */
  getInformation() {
    return of((data as any).default);
  }

  /**
   * Hace el llamado al servicio de Registro.
   *
   * @param {ObjectRecord} objectValue
   * @return {*} 
   * @memberof GeneralService
   */
  saveRecord(objectValue: ObjectRecord) {
    return this.http.post(`${this.baseUrl}signup`, objectValue);
  }

  /**
   * Obtiene la información del servicio de las listas.
   *
   * @return {*} 
   * @memberof GeneralService
   */
  getInformationTechnologies() {
    return this.http.get(`${this.baseUrl}techs`);
  }
}
