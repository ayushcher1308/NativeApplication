import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/get', { 'access_token': accessToken });
  }

  login(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'user/login', data);
  }

  logout(): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'user/logout', { 'access_token': accessToken });
  }

  updateTeam(data): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/edit',
      (<any>Object).assign({ 'access_token': accessToken }, data));
  }

  deleteTeam(data): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/delete',
      (<any>Object).assign({ 'access_token': accessToken }, data));
  }




  addTeam(userdata): Observable<any> { 
let accessToken = localStorage.getItem('accessToken'); 
return this.http.post<any>(environment.API_URL + 'teams/add', 
(<any>Object).assign({ 'access_token': accessToken }, userdata)); 
} 

  

  
}
