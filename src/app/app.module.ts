import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingModule } from './landing/landing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RecordComponent } from './record/record.component';
import { AuthGuardService } from './app-core/core/guards/auth-guard.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinerComponent } from './shared/components/spiner/spiner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersistenceModule } from 'angular-persistence';
import { ListsComponent } from './lists/lists.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [AppComponent, RecordComponent, SpinerComponent, ListsComponent, NavbarComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    LandingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    PersistenceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
