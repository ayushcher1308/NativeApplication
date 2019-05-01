import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './private/navbar/navbar.component';
// import { TeamDetailsComponent } from './private/team-details/team-details.component';
// import { AddTeamComponent } from './private/add-team/add-team.component';
// import { TeamComponent } from './team/team.component';
import { AddEditComponent } from './private/add-edit/add-edit.component';
// import { PrivateComponent } from './private/private.component';
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    // TeamDetailsComponent,
    // AddTeamComponent,
    // TeamComponent,
    AddEditComponent,
    // PrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
