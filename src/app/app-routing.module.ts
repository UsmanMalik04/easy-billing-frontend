import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ContractComponent } from './Dashboard/contract/contract.component';
import {UploadPartsRequestComponent} from './Dashboard/upload-parts-request/upload-parts-request.component';
import { SourcingComponent } from './Dashboard/sourcing/sourcing.component';
import { ItemlistComponent } from './Dashboard/itemlist/itemlist.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  {path: 'signup', component: SignupComponent}, 
  {path: 'dashboard', component: DashboardComponent, children: [
    //{path: "", redirectTo: "dashboard"}, 
    { path: "reqs", component: ContractComponent },
    { path: "uploadparts", component: UploadPartsRequestComponent }, 
    { path: "sourcing", component: SourcingComponent }, 
    { path: "itemlist", component: ItemlistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
