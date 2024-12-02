import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRecipeService {
  constructor(private _HttpClient: HttpClient) {}
  getFavUserRecipes(): Observable<any> {
    return this._HttpClient.get('UserRecipe');
  }
  postFavUserRecipe(recipeId: number): Observable<any> {
    return this._HttpClient.post('UserRecipe', recipeId);
  }
  deleteFavUserRecipe(id: number): Observable<any> {
    return this._HttpClient.delete(`UserRecipe/${id}`);
  }
}
