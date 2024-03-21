import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email:string,password:string){
    const loginData = {email,password};
    return this.http.post<any>('http://localhost:8080/api/login',loginData);
  }
}
