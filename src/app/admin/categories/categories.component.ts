import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryNameList: string[] = [];
  constructor(private _CategoryService: CategoryService) {}
  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next: (res) => {
        res.data.forEach((category: any) => {
          this.categoryNameList.push(category.name);
        });
      },
    });
  }
  onSubmit(addCategoryForm: NgForm): void {
    if (addCategoryForm.valid) {
      const categoryName = addCategoryForm.value.name;
      this._CategoryService.addCategory(categoryName).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }
}
