import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';
import { ResetRequestComponent } from './components/reset-request/reset-request.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    ResetRequestComponent,
    ResetPassowrdComponent,
    VerifyAccountComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
    SharedModule,
  ],
})
export class AuthModule {}
