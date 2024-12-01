import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteRecipesComponent } from './favourite-recipes.component';

const routes: Routes = [{ path: '', component: FavouriteRecipesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRecipesRoutingModule { }
