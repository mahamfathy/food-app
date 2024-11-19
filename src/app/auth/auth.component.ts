import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService
  ) {}

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  onLogin(loginForm: FormGroup): void {
    if (loginForm.invalid) {
      this.toastr.error('Invalid login details!', 'Error');
      return;
    }
    this.authService.loginForm(loginForm.value).subscribe({
      next: (res) => {
        this.localStorageService.setItem('userToken', res.token);
      },
      error: (err) => {
        const errors = err.error.errors;
        if (errors) {
          if (errors.email) {
            this.toastr.error(errors.email, 'Email Error');
          } else if (errors.password) {
            this.toastr.error(errors.password, 'Password Error');
          }
        } else {
          this.toastr.error(
            err.error.message || 'An unexpected error occurred',
            'Error'
          );
        }
      },
      complete: () => {
        this.toastr.success('Login successful!', 'Success');
      },
    });
    // loginForm.reset();
  }
}
