import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { ILogin } from '../interface/ILogin';
import { IRegister } from '../interface/IRegister';
import { IResetPassword } from '../interface/IResetPassword';
import { IVerify } from '../interface/IVerify';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  private token: any = this._LocalStorageService.getItem('userToken');

  constructor(
    private _HttpClient: HttpClient,
    private _LocalStorageService: LocalStorageService
  ) {
    if (this.token) {
      this.getProfile();
    }
  }
  getProfile() {
    let decoded: any = jwtDecode(this.token);
    this._LocalStorageService.setItem('email', decoded.userEmail);
    this._LocalStorageService.setItem('userName', decoded.userName);
    this._LocalStorageService.setItem('role', decoded.userGroup);
    this.getRole();
  }
  getRole(): void {
    if (this.token && this._LocalStorageService.getItem('role')) {
      this.role = this._LocalStorageService.getItem('role');
    }
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
