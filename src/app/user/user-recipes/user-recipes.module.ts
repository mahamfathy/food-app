import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UserRecipesRoutingModule } from './user-recipes-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRecipesRoutingModule, MatSnackBarModule],
})
export class UserRecipesModule {}
