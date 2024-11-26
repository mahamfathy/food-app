import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserRecipeService {
  constructor(
    private _HttpClient: HttpClient,
    private _LocalStorageService: LocalStorageService
  ) {}
  getFavUserRecipes(): Observable<any> {
    return this._HttpClient.get('/UserRecipe');
  }
}
