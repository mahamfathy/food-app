import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';

@NgModule({
  declarations: [CategoriesComponent, AddEditCategoryComponent, DeleteCategoryComponent],
  imports: [CommonModule, CategoriesRoutingModule, SharedModule],
})
export class CategoriesModule {}
