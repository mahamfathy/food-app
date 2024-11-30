import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [RecipesComponent],
  imports: [CommonModule, RecipesRoutingModule, SharedModule],
})
export class RecipesModule {}
