import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './template/default/default.component';
import { MenuComponent } from './ui/menu/menu.component';
import { ClientServiceListComponent } from './client-service/client-service-list/client-service-list.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { TokenInterceptor } from './services/auth/token.interceptor';
import { NgxLoadingModule } from 'ngx-loading';
import { ClientsFormComponent } from './clients/clients-form/clients-form.component';
import { InternalControlsComponent } from './ui/internal-controls/internal-controls.component';
import { BottomSheetComponent } from './ui/bottom-sheet/bottom-sheet.component';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';
import { MatDialogModule } from '@angular/material';
import { ServicesComponent } from './client-service/services/services.component';
import { ClientServiceFormComponent } from './client-service/client-service-form/client-service-form.component';
import { ClientServiceHighlightComponent } from './client-service/client-service-highlight/client-service-highlight.component';
import { StorageComponent } from './storage/storage/storage.component';
import { StorageListComponent } from './storage/storage-list/storage-list.component';
import { StorageFormComponent } from './storage/storage-form/storage-form.component';
import { ConfigComponent } from './config/config/config.component';
import { ServicesListComponent } from './config/services-list/services-list.component';
import { ServiceFormComponent } from './config/service-form/service-form.component';
import { CategoryListComponent } from './config/category-list/category-list.component';
import { CategoryFormComponent } from './config/category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DefaultComponent,
    MenuComponent,
    ClientServiceListComponent,
    ClientsListComponent,
    ClientsComponent,
    ClientsFormComponent,
    ClientsFormComponent,
    InternalControlsComponent,
    BottomSheetComponent,
    ConfirmDlgComponent,
    ServicesComponent,
    ClientServiceFormComponent,
    ClientServiceHighlightComponent,
    StorageComponent,
    StorageListComponent,
    StorageFormComponent,
    ConfigComponent,
    ServicesListComponent,
    ServiceFormComponent,
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({}),
    NgxMaskModule.forRoot()
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [ BottomSheetComponent, ConfirmDlgComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
