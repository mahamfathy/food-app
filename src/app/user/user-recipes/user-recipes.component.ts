import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/admin/categories/interfaces/ICategory';
import { ViewRecipeComponent } from 'src/app/admin/recipes/components/view-recipe/view-recipe.component';
import { IRecipe } from 'src/app/admin/recipes/interfaces/IRecipe';
import { ITag } from 'src/app/admin/recipes/interfaces/ITag';
import { HelperService } from 'src/app/shared/services/helper.service';
import { AddToFavComponent } from '../fav/components/add-to-fav/add-to-fav.component';
import { FavService } from '../fav/services/fav.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss'],
})
export class UserRecipesComponent {
  loading: boolean = false;
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
  resMsg: string = '';
  constructor(
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
    private _FavService: FavService,
    private snackBar: MatSnackBar,
    private _HelperService: HelperService
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
  }

  getRecipes(): void {
    this.loading = true;
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchVal,
      tagId: this.tagId,
      categoryId: this.categoryId,
    };
    this._HelperService.getRecipes(tableParams).subscribe({
      next: (res) => {
        this.loading = false;
        this.listData = res.data.map((recipe: IRecipe) => ({
          ...recipe,
          tag: Array.isArray(recipe.tag) ? recipe.tag : [recipe.tag],
          category: Array.isArray(recipe.category)
            ? recipe.category
            : [recipe.category],
        }));
        this.tableRes = res;
      },
      error: (err) => {
        this.loading = false;
        this._ToastrService.error('Failed to load recipes', 'Error');
      },
    });
  }
  getTag(): void {
    this._HelperService.getAllTags().subscribe({
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
  }

  viewRecipes(recipe: IRecipe): void {
    this._HelperService.getRecipeById(recipe.id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {
        const dialogRef = this.dialog.open(AddToFavComponent, {
          data: {
            name: recipe.name,
            id: recipe.id,
            imagePath: recipe.imagePath
              ? this.imagePath + recipe.imagePath
              : 'assets/img/dummy-image.svg',
            description: recipe.description,
          },
        });
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
            this.addRecipeToFavorites(recipe.id);
          }
        });
      },
    });
  }

  getAllCategories(): void {
    let tableParams = {
      pageSize: 2000,
      pageNumber: 1,
    };
    this._HelperService.getAllCategories(tableParams).subscribe({
      next: (res) => {
        this.categoriesList = res.data;
      },
    });
  }

  clearFilter(): void {
    this.searchVal = '';
    this.tagId = 0;
    this.categoryId = 0;
    this.getRecipes();
  }
  addToFavorites(recipe: IRecipe): void {
    this.addRecipeToFavorites(recipe.id);
  }
  private addRecipeToFavorites(recipeId: number): void {
    this._FavService.onAddFav(recipeId).subscribe({
      next: (res) => this.showSnackBar(res),
      error: (err) => this.handleAddToFavoritesError(err),
    });
  }
  private showSnackBar(res: any): void {
    this.snackBar.open(
      `#${res.recipe.id}: ${res.recipe.name} added to favorites!`,
      'Close',
      {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      }
    );
  }
  private handleAddToFavoritesError(err: any): void {
    this._ToastrService.error('Failed to add recipe to favorites', 'Error');
  }
}
