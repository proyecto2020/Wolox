import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wolox';
  constructor( private readonly translateService: TranslateService) {
    this.initializeApp();
  }
  initializeApp() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('es');
  }
}
