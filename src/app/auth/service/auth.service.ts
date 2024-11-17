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
    return this._httpClient.post('/Users/Login', loginForm);
  }
}
