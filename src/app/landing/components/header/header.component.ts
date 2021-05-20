import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Record } from './entities/record.object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  informacionUsuario: Record;
  _isLogged: boolean;
  get isLogged(): boolean {
    return this._isLogged;
  }
  @Input() set isLogged(value: boolean) {
    this._isLogged = value;
  }
  constructor(
    private readonly translate: TranslateService,
    private readonly router: Router
  ) {
    this.informacionUsuario = new Record();
  }

  ngOnInit(): void {}
  changeLanguage(language: string): void {
    this.translate.use(language);
  }
  navigateToRecord(): void {
    let datos = new Object();
    datos = {
      email: this.informacionUsuario.email,
      password: this.informacionUsuario.password,
    };
    sessionStorage.setItem('record', datos as string);
    this.router.navigate(['/record']);
  }
}
