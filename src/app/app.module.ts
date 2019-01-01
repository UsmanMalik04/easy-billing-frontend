import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ContractComponent } from './Dashboard/contract/contract.component';
import { MenuComponent } from './Dashboard/menu/menu.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {UploadPartsRequestComponent } from './Dashboard/upload-parts-request/upload-parts-request.component';
import { SourcingComponent } from './Dashboard/sourcing/sourcing.component';
import { ItemlistComponent } from './Dashboard/itemlist/itemlist.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ContractComponent,
    MenuComponent,
    UploadPartsRequestComponent,
    SourcingComponent,
    ItemlistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DlDateTimePickerDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
