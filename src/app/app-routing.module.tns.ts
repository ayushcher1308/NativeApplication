import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { routes } from './app.routes';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { AddEditComponent } from './private/add-edit/add-edit.component';
import { publicAuthGuardService } from './private/auth/public-auth-guard.service';
import { AuthGuardService } from './private/auth/auth-guard.service';


export const router: Routes = [
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
      canActivate: [AuthGuardService],
      //  canDeactivate:[publicAuthGuardService],
  },
  {
    path:'team/:i',
    component: AddEditComponent,
    // canActivate: [AuthGuardService],
    // canDeactivate:[publicAuthGuardService],
}
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [NativeScriptRouterModule.forRoot(router)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { 

  
}


