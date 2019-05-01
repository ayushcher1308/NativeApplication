import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AddTeamComponent } from './private/add-team/add-team.component';
import { TeamDetailsComponent } from './private/team-details/team-details.component';
// import { TeamComponent } from './team/team.component';
import { AddEditComponent } from './private/add-edit/add-edit.component';

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
      component: DashboardComponent,
      children:[{
        path:'team/:i',
        component: AddEditComponent
  }],
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
