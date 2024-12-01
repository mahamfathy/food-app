import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRecipesRoutingModule } from './favourite-recipes-routing.module';
import { FavouriteRecipesComponent } from './favourite-recipes.component';


@NgModule({
  declarations: [
    FavouriteRecipesComponent
  ],
  imports: [
    CommonModule,
    FavouriteRecipesRoutingModule
  ]
})
export class FavouriteRecipesModule { }
