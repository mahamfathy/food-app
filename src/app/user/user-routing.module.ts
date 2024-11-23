import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavRecipesComponent } from './fav-recipes/fav-recipes.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'fav', component: FavRecipesComponent },
      { path: 'categories', component: FavRecipesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
