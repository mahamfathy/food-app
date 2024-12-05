import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';

const routes: Routes = [
  {
    path: '',
    // component: UserComponent,
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'user-recipes',
    loadChildren: () =>
      import('./user-recipes/user-recipes.module').then(
        (m) => m.UserRecipesModule
      ),
  },
  {
    path: 'fav',
    loadChildren: () => import('./fav/fav.module').then((m) => m.FavModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
