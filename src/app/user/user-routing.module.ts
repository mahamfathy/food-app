import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../admin/recipes/recipes.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'favourite-recipes',
    loadChildren: () =>
      import('./favourite-recipes/favourite-recipes.module').then(
        (m) => m.FavouriteRecipesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
