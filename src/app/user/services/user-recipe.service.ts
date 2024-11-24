import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserRecipeService {
  headers: any = new HttpHeaders({
    Authorization: `Bearer ${this._LocalStorageService.getItem('userToken')}`,
  });
  constructor(
    private _HttpClient: HttpClient,
    private _LocalStorageService: LocalStorageService
  ) {}
  getFavUserRecipes(): Observable<any> {
    return this._HttpClient.get('/UserRecipe', { headers: this.headers });
  }
}
