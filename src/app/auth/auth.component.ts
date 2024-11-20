import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth.service';
import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  passwordVisible: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
  });
  constructor(
    private _AuthService: AuthService,
    private _LocalStorageService: LocalStorageService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  onLogin(loginForm: FormGroup): void {
    if (loginForm.invalid) {
      this._ToastrService.error('Invalid login details!', 'Error');
      return;
    }
    this._AuthService.onLogin(loginForm.value).subscribe({
      next: (res) => {
        this._LocalStorageService.setItem('userToken', res.token);
        this._AuthService.getProfile();
      },
      error: (err) => {
        const errors = err.error.errors;
        if (errors) {
          if (errors.email) {
            this._ToastrService.error(errors.email, 'Email Error');
          } else if (errors.password) {
            this._ToastrService.error(errors.password, 'Password Error');
          }
        } else {
          this._ToastrService.error(
            err.error.message || 'An unexpected error occurred',
            'Error'
          );
        }
      },
      complete: () => {
        this._ToastrService.success('Login successful!', 'Success');
        this._Router.navigateByUrl('/dashboard/home');
      },
    });
    // loginForm.reset();
  }
}
