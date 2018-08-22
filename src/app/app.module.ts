import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ManagegroupComponent } from './managegroup/managegroup.component';
import { ManagescheduleComponent } from './manageschedule/manageschedule.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import {AdminModule} from "./admin/admin.module";
import { ManagecourseComponent } from './managecourse/managecourse.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AdminComponent,
    AboutComponent,
    EnquiryformComponent,
    HomepageComponent,
    ManageuserComponent,
    ManagegroupComponent,
    ManagescheduleComponent,
    EvaluationComponent,
    ManagecourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
