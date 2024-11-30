import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private _HttpClient: HttpClient) {}
  getRecipes(data: any): Observable<any> {
    // let myParams = { pageSize: 10, pageNumber: 1 };
    return this._HttpClient.get('Recipe', { params: data });
  }

  onAddRecipe(data: any): Observable<any> {
    return this._HttpClient.post('Recipe', data);
  }
  getRecipeById(id: number): Observable<any> {
    return this._HttpClient.get(`Recipe/${id}`);
  }
  updateRecipe(id: number, RecipeName: string): Observable<any> {
    return this._HttpClient.put(`Recipe/${id}`, { name: RecipeName });
  }
  deleteRecipe(id: number): Observable<any> {
    return this._HttpClient.delete(`Recipe/${id}`);
  }
}
