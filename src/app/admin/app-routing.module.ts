import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AdminPageComponent} from "./admin-page/admin-page.component";


const routes: Routes = [
  {path: '', component:AdminPageComponent, pathMatch: 'full'},
  {path:'adminpage', component:AdminPageComponent}


]
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
