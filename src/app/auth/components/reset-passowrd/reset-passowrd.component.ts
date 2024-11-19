import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.scss'],
})
export class ResetPassowrdComponent {
  hidePassword: boolean = true;
  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    seed: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
  });
  constructor(private authService: AuthService) {}
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onResetPass(resetPassForm: FormGroup): void {
    this.authService.resetPasswordForm(resetPassForm.value).subscribe();
    resetPassForm.reset();
  }
}
