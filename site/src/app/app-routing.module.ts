import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './template/default/default.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients/clients.component'
import { AuthGuard } from './services/auth/auth.guard';
import { ClientsFormComponent } from './clients/clients-form/clients-form.component';
import { ServicesComponent } from './client-service/services/services.component';
import { ClientServiceFormComponent } from './client-service/client-service-form/client-service-form.component';
import { ClientServiceHighlightComponent } from './client-service/client-service-highlight/client-service-highlight.component';
import { StorageComponent } from './storage/storage/storage.component';
import { StorageListComponent } from './storage/storage-list/storage-list.component';
import { StorageFormComponent } from './storage/storage-form/storage-form.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'storage',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: StorageComponent },
      { path: 'new', component: StorageFormComponent },
      { path: 'new/:id', component: StorageListComponent }
      
    ]
  },
  {
    path: 'clients',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ClientsComponent },
      { path: 'new', component: ClientsFormComponent },
      { path: 'new/:id', component: ClientsFormComponent }
    ]
  },
  {
    path: 'services',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ServicesComponent },
      { path: 'new', component: ClientServiceFormComponent },
      { path: 'new/:id', component: ClientServiceFormComponent },
      { path: ':id', component: ClientServiceHighlightComponent },
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
