import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _HttpClient: HttpClient) {}
  // getAllCategories(data: any): Observable<any> {
  //   // let myParams = { pageSize: 10, pageNumber: 1 };
  //   return this._HttpClient.get('Category', { params: data });
  // }

  onAddCategory(data: any): Observable<any> {
    return this._HttpClient.post('Category', data);
  }
  getCategoryById(id: number): Observable<any> {
    return this._HttpClient.get(`Category/${id}`);
  }
  updateCategory(id: number, CategoryName: string): Observable<any> {
    return this._HttpClient.put(`Category/${id}`, { name: CategoryName });
  }
  deleteCategory(id: number): Observable<any> {
    return this._HttpClient.delete(`Category/${id}`);
  }
}
