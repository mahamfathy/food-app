import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [RecipesComponent, AddEditRecipeComponent, ViewRecipeComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    NgxDropzoneModule,
  ],
})
export class RecipesModule {}
