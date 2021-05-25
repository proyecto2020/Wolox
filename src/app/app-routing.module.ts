import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './app-core/core/guards/auth-guard.service';
import { LandingComponent } from './landing/landing.component';
import { ListsComponent } from './lists/lists.component';
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
  {
    path: 'lists',
    component: ListsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "",
    component: LandingComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
