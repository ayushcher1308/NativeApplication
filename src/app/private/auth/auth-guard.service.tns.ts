import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

// can Activate Auth GUard prevemting route to navigate

  constructor(private router:Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        require( "nativescript-localstorage" );
    if(!!localStorage.getItem('accessToken')){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}
