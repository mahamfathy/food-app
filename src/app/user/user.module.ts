import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FavRecipesComponent } from './fav-recipes/fav-recipes.component';


@NgModule({
  declarations: [
    UserComponent,
    FavRecipesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
