import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../interface/ILogin';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}
  loginForm(loginForm: ILogin): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this._httpClient.post(
      'https://upskilling-egypt.com:3006/api/v1/Users/Login',
      loginForm,
      { headers }
    );
  }
}
