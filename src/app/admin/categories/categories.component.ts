import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryNameList: string[] = [];
  constructor(
    private _CategoryService: CategoryService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next: (res) => {
        res.data.forEach((category: any) => {
          this.categoryNameList.push(category.name);
        });
      },
      error: (err) => {
        this._ToastrService.error('Failed to load categories', 'Error');
      },
    });
  }
  onSubmit(addCategoryForm: NgForm): void {
    if (addCategoryForm.valid) {
      const categoryName = addCategoryForm.value.name;
      this._CategoryService.addCategory(categoryName).subscribe({
        next: (res) => {
          this.categoryNameList.push(categoryName);
          addCategoryForm.reset();
        },
        error: (err) => {
          this._ToastrService.error('An unexpected error occurred', 'Error');
        },
        complete: () => {
          this._ToastrService.success(
            `You have successfully added "${categoryName}"`,
            'Success'
          );
        },
      });
    }
  }
  viewCategory(): void {}
  editCategory() {}
  deleteCategory() {}
}
