import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './template/default/default.component';
import { MenuComponent } from './ui/menu/menu.component';
import { ClientServiceListComponent } from './client-service/client-service-list/client-service-list.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/auth/token.interceptor';
import { NgxLoadingModule } from 'ngx-loading';
import { ClientsFormComponent } from './clients/clients-form/clients-form.component';
import { InternalControlsComponent } from './ui/internal-controls/internal-controls.component';
import { BottomSheetComponent } from './ui/bottom-sheet/bottom-sheet.component';


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
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [ BottomSheetComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
