import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ICategory } from '../categories/interfaces/ICategory';
import { CategoryService } from '../categories/services/category.service';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DeleteRecipeComponent } from './components/delete-recipe/delete-recipe.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { IRecipe } from './interfaces/IRecipe';
import { ITag } from './interfaces/ITag';
import { RecipeService } from './services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  name: string = '';
  listData: IRecipe[] = [];
  categoriesList: ICategory[] = [];
  tableRes: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageEvent!: PageEvent;
  searchVal: string = '';
  tagList: ITag[] = [];
  tagId: number = 0;
  categoryId: number = 0;
  imagePath: string = 'https://upskilling-egypt.com:3006/';

  constructor(
    private _RecipeService: RecipeService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
    private _AuthService: AuthService,
    private _CategoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.getRecipes();
    this.getAllCategories();
    this.getTag();
  }
  openDialog(recipe?: IRecipe): void {
    const dialogRef = this.dialog.open(ViewRecipeComponent, {
      data: {
        name: recipe?.name,
        imagePath: recipe?.imagePath,
        description: recipe?.description,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  getRecipes(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchVal,
      tagId: this.tagId,
      categoryId: this.categoryId,
    };
    this._RecipeService.getRecipes(tableParams).subscribe({
      next: (res) => {
        this.listData = res.data;
        this.tableRes = res;
        console.log(res);
      },
      error: (err) => {
        this._ToastrService.error('Failed to load categories', 'Error');
      },
    });
  }
  getTag(): void {
    this._RecipeService.getAllTags().subscribe({
      next: (res) => {
        this.tagList = res;
      },
    });
  }
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getRecipes();
    console.log(e);
  }

  editRecipe(id: number, recipeName: string): void {
    const dialogRef = this.dialog.open(AddEditRecipeComponent, {
      data: { name: recipeName, isReadOnly: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._RecipeService.updateRecipe(id, result.name).subscribe({
          next: () => {},
          error: () => {
            this._ToastrService.error('Failed to update recipe', 'Error');
          },
          complete: () => {
            this._ToastrService.success(
              `Recipe "${result.name}" updated successfully!`,
              'Success'
            );
            this.getRecipes();
          },
        });
      }
    });
  }
  viewRecipes(recipe: IRecipe): void {
    this._RecipeService.getRecipeById(recipe.id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {
        this.dialog.open(AddEditRecipeComponent, {
          data: { name: recipe.name, isReadOnly: true },
        });
      },
    });
  }
  deleteRecipe(id: number) {
    const dialogRef = this.dialog.open(DeleteRecipeComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._RecipeService.deleteRecipe(id).subscribe({
          next: () => {},
          error: () => {
            this._ToastrService.error('Failed to delete recipe', 'Error');
          },
          complete: () => {
            this._ToastrService.success(
              `Recipe has been deleted successfully!`,
              'Success'
            );
            this.getRecipes();
          },
        });
      }
    });
  }
  getAllCategories(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchVal,
    };
    this._CategoryService.getAllCategories(tableParams).subscribe({
      next: (res) => {
        this.categoriesList = res.data.name;
        this.tableRes = res;
      },
    });
  }

  clearFilter(): void {
    this.searchVal = '';
    this.tagId = 0;
    this.categoryId = 0;
    this.getRecipes();
  }
}
