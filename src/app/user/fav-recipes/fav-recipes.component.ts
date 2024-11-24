import { Component } from '@angular/core';
import { UserRecipeService } from '../services/user-recipe.service';

@Component({
  selector: 'app-fav-recipes',
  templateUrl: './fav-recipes.component.html',
  styleUrls: ['./fav-recipes.component.scss'],
})
export class FavRecipesComponent {
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
