import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';

@NgModule({
  declarations: [UsersComponent, ViewUserComponent, CreateAdminComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
