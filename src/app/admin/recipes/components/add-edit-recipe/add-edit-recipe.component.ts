import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/admin/categories/interfaces/ICategory';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { IRecipe } from '../../interfaces/IRecipe';
import { ITag } from '../../interfaces/ITag';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent implements OnInit {
  imgSrc: any;
  files: File[] = [];
  listTags: ITag[] = [];
  listCategories: ICategory[] = [];
  tagId: number = 0;
  categoriesIds: number = 0;
  listData: IRecipe[] = [];
  pageSize: number = 10;
  pageNumber: number = 1;
  recipeForm = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price: new FormControl(null),
    tagId: new FormControl(null),
    categoriesIds: new FormControl([]),
    recipeImage: new FormControl(null),
  });
  constructor(
    private _CategoryService: CategoryService,
    private _RecipeService: RecipeService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllCategories();
    this.getTag();
  }
  getRecipes(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      // name: this.searchVal,
      tagId: this.recipeForm.get('tagId')?.value,
      categoriesIds: this.recipeForm.get('categoriesIds')?.value,
    };
    this._RecipeService.getRecipes(tableParams).subscribe({
      next: (res) => {
        this.listData = res.data;
        // this.tableRes = res;
        // this.categoriesList = res.data.category.name;
      },
      error: (err) => {
        this._ToastrService.error('Failed to load categories', 'Error');
      },
    });
  }
  getTag(): void {
    this._RecipeService.getAllTags().subscribe({
      next: (res) => {
        this.listTags = res;
      },
    });
  }
  sendData(data: FormGroup): void {
    let myData = new FormData();

    Object.keys(data.value).forEach((key) => {
      myData.append(key, data.value[key]);
    });
    if (this.files.length > 0) {
      myData.append('recipeImage', this.files[0]);
    }

    this._RecipeService.onAddRecipe(myData).subscribe({
      next: () => {
        this._ToastrService.success(
          'You have successfully added a new recipe',
          'Success'
        );
      },
      error: () => {
        this._ToastrService.error('Failed to add recipe', 'Error');
      },
      complete: () => {
        this.getRecipes();
      },
    });
  }
  getAllCategories(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      // name: this.searchVal,
    };
    this._CategoryService.getAllCategories(tableParams).subscribe({
      next: (res) => {
        this.listCategories = res.data;
        // this.tableRes = res;
      },
    });
  }
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
