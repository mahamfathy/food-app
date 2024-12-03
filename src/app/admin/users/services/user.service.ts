import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userNameSource = new BehaviorSubject<string | null>(
    localStorage.getItem('userName')
  );
  userName$ = this.userNameSource.asObservable();
  constructor(private _HttpClient: HttpClient) {}
  getAllUsers(data: any): Observable<any> {
    return this._HttpClient.get('Users', { params: data });
  }
  getUsersById(id: number): Observable<any> {
    return this._HttpClient.get(`Users/${id}`);
  }

  deleteUsers(id: number): Observable<any> {
    return this._HttpClient.delete(`Users/${id}`);
  }
  updateUserName(newUserName: string): void {
    localStorage.setItem('userName', newUserName);
    this.userNameSource.next(newUserName);
  }
  createAdmin(adminForm: FormData): Observable<any> {
    return this._HttpClient.post('Users', adminForm);
  }
}
