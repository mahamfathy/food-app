import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';

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
        '^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
  });
  constructor(private authService: AuthService) {}

  togglePasswordVisiblity(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  onLogin(loginForm: FormGroup): void {
    this.authService.loginForm(loginForm.value).subscribe((next) => {
      console.log(next);
    });
    loginForm.reset();
  }
}
