import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { CommonModule } from '@angular/common';
import { WoloxersComponent } from './components/woloxers/woloxers.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterlandingComponent } from './components/footerlanding/footerlanding.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateComponent } from './components/translate/translate.component';
@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    WoloxersComponent,
    BenefitsComponent,
    FooterlandingComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    TranslateModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    LandingComponent,
  ],
})
export class LandingModule {
  constructor() {}
}