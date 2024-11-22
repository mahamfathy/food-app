import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';
import { ResetRequestComponent } from './components/reset-request/reset-request.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
  ],
})
export class AuthModule {}
