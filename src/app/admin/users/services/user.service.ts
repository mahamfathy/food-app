import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _HttpClient: HttpClient) {}
  getAllUsers(data: any): Observable<any> {
    // let myParams = { pageSize: 10, pageNumber: 1 };
    return this._HttpClient.get('Users', { params: data });
  }
  // onAddUsers(data: any): Observable<any> {
  //   return this._HttpClient.post('Users', data);
  // }
  getUsersById(id: number): Observable<any> {
    return this._HttpClient.get(`Users/${id}`);
  }
  // updateUsers(id: number, UsersName: string): Observable<any> {
  //   return this._HttpClient.put(`Users/${id}`, { name: UsersName });
  // }
  deleteUsers(id: number): Observable<any> {
    return this._HttpClient.delete(`Users/${id}`);
  }
}
