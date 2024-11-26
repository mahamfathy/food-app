import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  headers: any = new HttpHeaders({
    Authorization: `Bearer ${this._LocalStorageService.getItem('userToken')}`,
  });
  constructor(
    private _HttpClient: HttpClient,
    private _LocalStorageService: LocalStorageService
  ) {}
  getAllCategories(data: any): Observable<any> {
    // let myParams = { pageSize: 10, pageNumber: 1 };
    return this._HttpClient.get('Category', { params: data });
  }

  addCategory(CategoryName: string): Observable<any> {
    return this._HttpClient.post('Category', { name: CategoryName });
  }
  getCategoryById(id: number): Observable<any> {
    return this._HttpClient.get(`Category/${id}`);
  }
  updateCategory(id: number, CategoryName: string): Observable<any> {
    return this._HttpClient.put(
      `Category/${id}`,
      { name: CategoryName },
      {
        headers: this.headers,
      }
    );
  }
  deleteCategory(id: number): Observable<any> {
    return this._HttpClient.delete(`/Category/${id}`, {
      headers: this.headers,
    });
  }
}
