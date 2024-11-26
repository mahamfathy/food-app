import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from './interfaces/ICategory';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  name: string = '';
  listData: ICategory[] = [];
  tableRes: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageEvent!: PageEvent;
  searchVal: string = '';
  constructor(
    private _CategoryService: CategoryService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchVal,
    };
    this._CategoryService.getAllCategories(tableParams).subscribe({
      next: (res) => {
        this.listData = res.data;
        this.tableRes = res;
      },
      error: (err) => {
        this._ToastrService.error('Failed to load categories', 'Error');
      },
    });
  }
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getCategories();
    console.log(e);
  }
  // onSubmit(addCategoryForm: NgForm): void {
  //   if (addCategoryForm.valid) {
  //     const categoryName = addCategoryForm.value.name;
  //     this._CategoryService.addCategory(categoryName).subscribe({
  //       next: (res) => {
  //         this.categoryNameList.push(categoryName);
  //         addCategoryForm.reset();
  //       },
  //       error: (err) => {
  //         this._ToastrService.error('An unexpected error occurred', 'Error');
  //       },
  //       complete: () => {
  //         this._ToastrService.success(
  //           `You have successfully added "${categoryName}"`,
  //           'Success'
  //         );
  //       },
  //     });
  //   }
  // }
  viewCategory(id: number): void {
    this._CategoryService.getCategoryById(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  // updateCategory(id: number, categoryName: string): void {
  //   this._CategoryService.updateCategory(id, categoryName).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //   });
  // }
  // deleteCategory(id: number) {
  //   this._CategoryService.deleteCategory(id).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.categoryNameList.splice(
  //         this.categoryNameList.indexOf(res.data.name)
  //       );
  //     },
  //   });
  // }
}
