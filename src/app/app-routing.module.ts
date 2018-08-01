import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {WelcomepageComponent} from './welcomepage/welcomepage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';



const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component:WelcomepageComponent },
  { path: 'login', component:LoginpageComponent },
  { path: 'signup', component:SignuppageComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
