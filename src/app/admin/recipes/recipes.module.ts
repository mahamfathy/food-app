import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DeleteRecipeComponent } from './components/delete-recipe/delete-recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipeComponent,
    DeleteRecipeComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, SharedModule, SharedModule],
})
export class RecipesModule {}
