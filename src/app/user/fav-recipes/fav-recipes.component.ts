import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-fav-recipes',
  templateUrl: './fav-recipes.component.html',
  styleUrls: ['./fav-recipes.component.scss'],
})
export class FavRecipesComponent {
  constructor(private _AuthService: AuthService) {}
  recipes: any[] = [];
  recipe(): void {
    this._AuthService.getFavUserRecipes().subscribe({
      next: (res) => {
        this.recipes = res.data;
        console.log(this.recipes);
      },
    });
  }
}
