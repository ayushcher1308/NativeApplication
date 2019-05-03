import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  

@Injectable({
  providedIn: 'root'
})
export class publicAuthGuardService implements CanActivate,CanDeactivate<CanComponentDeactivate>{
    
    canDeactivate(component: CanComponentDeactivate, 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise<boolean>((resolve, reject) => { 
                dialogs.confirm({
                    title: "Do You Want to Log Out",
                    // message: "Your message",
                    okButtonText: "OK",
                    cancelButtonText: "Cancel",
                    // neutralButtonText: "Neutral text"
                }).then( (result)=> {
                    if(result){
                        require( "nativescript-localstorage" );
                        localStorage.clear();
                        resolve(true);
                        return true
                        // this.router.navigate(["/home"]);
                    }
                    else
                    {
                        reject();
                        this.router.navigate(["/teams"]);
                        
                    }
                    // result argument is boolean
                    console.log("Dialog result: " + result);
                });
            });
            
           
}

  constructor(private router:Router, private location:Location) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //   console.log("public auth"); 
    //   require( "nativescript-localstorage" );
    // if(!!localStorage.getItem('accessToken')){
    //     require( "nativescript-localstorage" );
        console.log("HERE")

        // var dialogs = require("tns-core-modules/ui/dialogs");
        dialogs.confirm({
            title: "Do You Want to Log Out",
            // message: "Your message",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral text"
        }).then(function (result) {
            if(result){
                require( "nativescript-localstorage" );
                localStorage.clear();
                this.router.navigate(["/home"]);
            }
            else
            {
                this.router.navigate(["/teams"]);
            }
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
        return true

    //   if(window.confirm("You are already logged in. Want to logout?"))
    //   {
    //     require( "nativescript-localstorage" );
    //       localStorage.clear();
    //      this.router.navigate(["/home"]);
    //   }
    //   else{
        
    //      this.router.navigate(["/teams"]);

    //         }
    //   return false;
    // }else{

    //   return true;
    // }
  }
}
