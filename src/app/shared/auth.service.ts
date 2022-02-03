import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:8000/api/';

  constructor(private http:HttpClient) { 

  }
  login(user: string, pass: string) {
    let endpoint = 'login';
    let url = this.host + endpoint;    

    const authObj = {
      name: user,
      password: pass
    }
    const data = JSON.stringify(authObj);
    const httpOptionObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });
 
    const httpOption = {
      headers: httpOptionObj
    };
 

    return this.http.post<any>(url, data, httpOption);
  }
}