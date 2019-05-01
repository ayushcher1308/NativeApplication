import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AddTeamComponent } from './private/add-team/add-team.component';
import { TeamDetailsComponent } from './private/team-details/team-details.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path:'teams',
      component: DashboardComponent
  },
  {
    path:'teams/:i',
    component: DashboardComponent
},
  {
    path:'teamDetails',
    component: TeamDetailsComponent
},
  {
    path:'addTeam',
    component: AddTeamComponent
}

];
