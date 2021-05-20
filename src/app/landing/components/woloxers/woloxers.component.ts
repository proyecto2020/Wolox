import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultConfig } from 'src/app/utilities/defaultconfig';

@Component({
  selector: 'app-woloxers',
  templateUrl: './woloxers.component.html',
  styleUrls: ['./woloxers.component.css'],
})
export class WoloxersComponent implements OnInit {
  urlTwitter: string;
  constructor() {
    this.urlTwitter = DefaultConfig.DEFAULT_CONFIG_APP.DefaultUrlTwitter;
  }

  ngOnInit(): void {}

  /**
   *Navega al Twitter de wolox.
   *
   * @memberof WoloxersComponent
   */
  navigatePageTwitter(): void {
    window.location.href = this.urlTwitter;
  }
}
