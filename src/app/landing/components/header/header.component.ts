import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  _isLogged: boolean;
  get isLogged(): boolean {
    return this._isLogged;
  }
  @Input() set isLogged(value: boolean) {
    this._isLogged = value;
  }
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  navigateToRecord(): void {
    this.router.navigate(['/record']);
  }
}
