import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, HomeComponent, RecipesComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class SharedModule {}
