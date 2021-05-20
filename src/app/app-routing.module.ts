import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './app-core/core/guards/auth-guard.service';
import { LandingComponent } from './landing/landing.component';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  {
    path: 'record',
    component: RecordComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
