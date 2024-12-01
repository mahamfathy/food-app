import { Component } from '@angular/core';
import { UserRecipeService } from './services/user-recipe.service';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.scss'],
})
export class FavouriteRecipesComponent {
  constructor(private _UserRecipeService: UserRecipeService) {}
  recipes: any[] = [];
  recipe(): void {
    this._UserRecipeService.getFavUserRecipes().subscribe({
      next: (res) => {
        this.recipes = res.data;
        console.log(this.recipes);
      },
    });
  }
}
