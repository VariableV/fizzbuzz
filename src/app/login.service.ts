import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn : boolean;

  constructor(private http : HttpClient) { 
    this.isLoggedIn = false;
  }

  logged():boolean{
    return this.isLoggedIn;
  }

  updatelog(val) : void{
    this.isLoggedIn=val;
  }

  auth(username, password) {
    return this.http.get(`https://fizz-api.herokuapp.com/api/login?user=${username}&pass=${password}`);
  }
}
