import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../interface/ILogin';
import { IRegister } from '../interface/IRegister';
import { IResetPassword } from '../interface/IResetPassword';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}
  loginForm(loginForm: ILogin): Observable<any> {
    return this._httpClient.post('/Users/Login', loginForm);
  }
  registerForm(registerForm: IRegister): Observable<any> {
    return this._httpClient.post('/Users/Register', registerForm);
  }
  resetRequestForm(resetReq: any): Observable<any> {
    return this._httpClient.post('Users/Reset/Request', resetReq);
  }
  resetPasswordForm(resetPasswordForm: IResetPassword): Observable<any> {
    return this._httpClient.post('/Users/Reset', resetPasswordForm);
  }
}
