import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  _tecnologias: string;
  get tecnologias(): string {
    return this._tecnologias;
  }
  @Input() set tecnologias(value: string) {
    this._tecnologias = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
