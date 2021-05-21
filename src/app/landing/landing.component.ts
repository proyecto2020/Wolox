import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PersistenceInfoService } from '../utilities/persistence/persistence-info.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isLogged: boolean;
  constructor(private persistence: PersistenceInfoService) { }

  ngOnInit(): void {
    this.isLogged = (this.persistence.existInfo('record')) ? true : false;
  }

}
