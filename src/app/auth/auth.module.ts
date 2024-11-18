import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetRequestComponent } from './components/reset-request/reset-request.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';

@NgModule({
  declarations: [AuthComponent, RegisterComponent, ResetRequestComponent, ResetPassowrdComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ],
})
export class AuthModule {}
