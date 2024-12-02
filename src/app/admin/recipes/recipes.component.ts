import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/service/auth.service';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DeleteRecipeComponent } from './components/delete-recipe/delete-recipe.component';
import { IRecipe } from './interfaces/IRecipe';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  name: string = '';
  listData: IRecipe[] = [];
  tableRes: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageEvent!: PageEvent;
  searchVal: string = '';
  constructor(
    private _RecipeService: RecipeService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.getRecipes();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditRecipeComponent, {
      data: { name: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addRecipe(result);
      }
    });
  }
  isAdmin(): boolean {
    return this._AuthService.role === 'SuperAdmin';
  }
  getRecipes(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchVal,
      tagId: Number,
      categoryId: Number,
    };
    this._RecipeService.getRecipes(tableParams).subscribe({
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
    this.getRecipes();
    console.log(e);
  }
  addRecipe(data: any): void {
    this._RecipeService.onAddRecipe(data).subscribe({
      next: (res) => {
        this.name = res.name;
      },
      error: (err) => {
        this._ToastrService.error('An unexpected error occurred', 'Error');
      },
      complete: () => {
        this.getRecipes();

        this._ToastrService.success(
          `You have successfully added "${this.name}"`,
          'Success'
        );
      },
    });
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
    // this._RecipeService.deleteCategory(id).subscribe({
    //   next: (res) => {},
    //   error: () => {},
    //   complete: () => {
    //     this._ToastrService.success('Category deleted successfully', 'Success');
    //     this.getCategories();
    //   },
    // });
  }
}
