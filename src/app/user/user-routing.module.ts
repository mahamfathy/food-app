import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
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
