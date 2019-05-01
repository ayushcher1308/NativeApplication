import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class publicAuthGuardService implements CanActivate{

  constructor(private router:Router, private location:Location) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log("public auth"); 
    if(!!localStorage.getItem('accessToken')){
      if(window.confirm("You are already logged in. Want to logout?"))
      {
          localStorage.clear();
         this.router.navigate(["/home"]);
      }
      else{
        
         this.router.navigate(["/teams"]);

            }
      return false;
    }else{

      return true;
    }
  }
}
