import { Injectable } from '@angular/core';
import { Teams } from '../list';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setValue(value)
  {
    localStorage.setItem('accessToken',value);
  }
}
