import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {AppRoutingModule} from './app-routing.module'
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [AdminPageComponent],
  exports:[
    AdminPageComponent
  ]
})
export class AdminModule { }
