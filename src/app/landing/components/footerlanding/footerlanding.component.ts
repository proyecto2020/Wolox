import { Component, Input, OnInit } from '@angular/core';
import { DefaultConfig } from 'src/app/utilities/defaultconfig';

@Component({
  selector: 'app-footerlanding',
  templateUrl: './footerlanding.component.html',
  styleUrls: ['./footerlanding.component.css'],
})
export class FooterlandingComponent implements OnInit {
  urlWolox: string;
  idFooter: string;
  constructor() {
    this.urlWolox = DefaultConfig.DEFAULT_CONFIG_APP.DefaultUrlWolox;
  }

  ngOnInit(): void { }

  /**
   *Navega a la pagina de wolox.
   *
   * @memberof FooterlandingComponent
   */
  navigatePageWolox(): void {
    window.location.href = this.urlWolox;
  }
}
