import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DeleteRecipeComponent } from './components/delete-recipe/delete-recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';

@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipeComponent,
    DeleteRecipeComponent,
    ViewRecipeComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, SharedModule],
})
export class RecipesModule {}
