import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './template/default/default.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: 'dash', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
