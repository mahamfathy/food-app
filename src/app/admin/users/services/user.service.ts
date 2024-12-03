import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userNameSource = new BehaviorSubject<string | null>(null);
  userName$ = this.userNameSource.asObservable();
  private imageUrl = new BehaviorSubject<string | null>(null);
  imagePath$ = this.imageUrl.asObservable();
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

  createAdmin(adminForm: FormData): Observable<any> {
    return this._HttpClient.post('Users/Create', adminForm);
  }
  fetchUser(): Observable<any> {
    return this._HttpClient.get('Users/currentUser').pipe(
      tap((res: any) => {
        if (res) {
          this.userNameSource.next(res.userName || null);
          this.imageUrl.next(res.imagePath || null);
        }
      })
    );
  }
}
