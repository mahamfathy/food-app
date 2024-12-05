import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { HelperService } from 'src/app/shared/services/helper.service';
import { ICategory } from '../categories/interfaces/ICategory';
import { CategoryService } from '../categories/services/category.service';
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
  loading: boolean = false;
  constructor(
    private _RecipeService: RecipeService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
    private _Router: Router,
    private _CategoryService: CategoryService,
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
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
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
    console.log(e);
  }

  editRecipe(id: number): void {
    this._Router.navigate([`/dashboard/admin/recipes/edit/${id}`]);
  }
  viewRecipes(recipe: IRecipe): void {
    this._HelperService.getRecipeById(recipe.id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {
        this.dialog.open(ViewRecipeComponent, {
          data: {
            name: recipe.name,
            id: recipe.id,
            imagePath: recipe.imagePath
              ? this.imagePath + recipe.imagePath
              : 'assets/img/dummy-image.svg',
            description: recipe.description,
            creationDate: recipe.creationDate,
            modificationDate: recipe.modificationDate,
          },
        });
      },
    });
  }
  deleteRecipe(recipe: IRecipe) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: { text: 'recipe', userName: recipe.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._RecipeService.deleteRecipe(recipe.id).subscribe({
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
}
