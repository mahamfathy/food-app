import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavService {
  constructor(private _HttpClient: HttpClient) {}
  onAddFav(recipeId: number): Observable<any> {
    return this._HttpClient.post('userRecipe', { recipeId });
  }
}
