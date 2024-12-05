import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _HttpClient: HttpClient) {}
  getRecipes(data: any): Observable<any> {
    // let myParams = { pageSize: 10, pageNumber: 1 };
    return this._HttpClient.get('Recipe', { params: data });
  }
  getRecipeById(id: number): Observable<any> {
    return this._HttpClient.get(`Recipe/${id}`);
  }
  getAllCategories(data: any): Observable<any> {
    // let myParams = { pageSize: 10, pageNumber: 1 };
    return this._HttpClient.get('Category', { params: data });
  }
  getAllTags(): Observable<any> {
    return this._HttpClient.get('tag');
  }
}
