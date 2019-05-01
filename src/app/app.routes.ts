import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
// import { AddTeamComponent } from './private/add-team/add-team.component';
// import { TeamDetailsComponent } from './private/team-details/team-details.component';
// import { TeamComponent } from './team/team.component';
import { AddEditComponent } from './private/add-edit/add-edit.component';
import { AuthGuardService } from './private/auth/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { publicAuthGuardService } from './private/auth/public-auth-guard.service';
// import { AuthGuardService } from './private/auth/auth-guard.service';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
      canActivate:[publicAuthGuardService],
  },
  {
      path:'teams',
      component: DashboardComponent,
      canActivate: [AuthGuardService],
      children:[{
        path:'team/:i',
        component: AddEditComponent,
        canActivate: [AuthGuardService]
  }],
  } ,
  // { path: '**', component: PageNotFoundComponent }
];
