import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component'
import {AdminComponent} from './admin/admin.component';
import {AboutComponent} from './about/about.component';
import {EnquiryformComponent} from './enquiryform/enquiryform.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {ManageuserComponent} from "./manageuser/manageuser.component";
import {ManagegroupComponent} from "./managegroup/managegroup.component";
import {ManagescheduleComponent} from "./manageschedule/manageschedule.component";
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {ManagecourseComponent} from "./managecourse/managecourse.component";


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path:'welcome',component:SidenavComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'enquiryform',
        component: EnquiryformComponent,
      },
      {
        path:'manageuser',
        component:ManageuserComponent,
      },
      {
        path:'managecourse',
        component:ManagecourseComponent
      },
      {
        path:'managegroup',
        component:ManagegroupComponent,
      },
      {
        path: 'manageschedule',
        component: ManagescheduleComponent
      },
      {
        path:'evaluation',
        component:EvaluationComponent
      }

    ]
  },
  {path:'lazyAdmin',loadChildren :'./admin/admin.module#AdminModule', data:{preLoad:true}}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
