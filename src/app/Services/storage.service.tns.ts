import { Injectable } from '@angular/core';
// import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  

  setValue(token)
  {
    require( "nativescript-localstorage" );
    localStorage.setItem('accessToken',token);
  }
}
