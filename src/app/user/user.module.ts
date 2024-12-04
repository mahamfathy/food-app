import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FavComponent } from './fav/fav.component';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, UserRecipesComponent, FavComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
