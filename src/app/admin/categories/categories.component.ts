import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryName: string[] = [];
  constructor(private _CategoryService: CategoryService) {}
  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next: (res) => {
        res.data.forEach((category: any) => {
          this.categoryName.push(category.name);
        });
      },
    });
  }
}
