import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { NavbarComponent } from './private/navbar/navbar.component';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { TeamDetailsComponent } from './private/team-details/team-details.component';
import { AddTeamComponent } from './private/add-team/add-team.component';
// import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
// import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';
// import { TeamService } from './Services/team.service';


// Uncomment and aLISTVIEW_DIRECTIVESdd to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    TeamDetailsComponent,
    AddTeamComponent,
    // LISTVIEW_DIRECTIVES
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptHttpModule,
    // NativeScriptUIListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
