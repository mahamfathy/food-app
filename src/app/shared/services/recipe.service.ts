import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(
    private _HttpClient: HttpClient,
    private _LocalStorageService: LocalStorageService
  ) {}
  // getRecipes(): Observable<any> {
  // }
  // addRecipe(Recipe: string): Observable<any> {
  // }
  getRecipeById(id: number): Observable<any> {
    return this._HttpClient.get(`/Recipe/${id}`);
  }
  // updateRecipe(): Observable<any> {

  // }
  deleteRecipe(id: number): Observable<any> {
    return this._HttpClient.delete(`/Recipe/${id}`);
  }
}
