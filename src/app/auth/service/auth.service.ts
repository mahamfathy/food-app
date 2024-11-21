import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { ILogin } from '../interface/ILogin';
import { IRegister } from '../interface/IRegister';
import { IResetPassword } from '../interface/IResetPassword';
import { IVerify } from '../interface/IVerify';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  getProfile() {
    let token: any = localStorage.getItem('userToken');
    let decoded = jwtDecode(token);
    console.log(decoded);
  }
  onLogin(loginForm: ILogin): Observable<any> {
    return this._HttpClient.post('/Users/Login', loginForm);
  }
  onRegister(registerForm: IRegister): Observable<any> {
    return this._HttpClient.post('/Users/Register', registerForm);
  }
  onResetRequest(resetReq: any): Observable<any> {
    return this._HttpClient.post('/Users/Reset/Request', resetReq);
  }
  onResetPassword(resetPasswordForm: IResetPassword): Observable<any> {
    return this._HttpClient.post('/Users/Reset', resetPasswordForm);
  }
  onVerifyAccount(IVerifyForm: IVerify): Observable<any> {
    return this._HttpClient.put('/Users/verify', IVerifyForm);
  }
}
