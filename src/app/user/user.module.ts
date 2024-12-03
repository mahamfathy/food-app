import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [UserComponent, UserRecipesComponent, FavComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
