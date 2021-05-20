import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isLogged: boolean;
  constructor(private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.isLogged = (sessionStorage.getItem('record')) ? true : false;
  }

}
