import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';
import { ResetRequestComponent } from './components/reset-request/reset-request.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: AuthComponent },
  { path: 'reset-request', component: ResetRequestComponent },
  { path: 'reset-password', component: ResetPassowrdComponent },
  { path: 'verify-account', component: VerifyAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
