import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.scss'],
})
export class ResetPassowrdComponent implements OnInit {
  hidePassword: boolean = true;
  resMessage: string = '';
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
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _LocalStorageService: LocalStorageService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    const email = this._LocalStorageService.getItem('email');
    this.resetPasswordForm.get('email')!.setValue(email || '');
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onResetPass(resetPassForm: FormGroup): void {
    if (resetPassForm.valid) {
      this._AuthService.onResetPassword(resetPassForm.value).subscribe({
        next: (res) => {
          this.resMessage = res.message;
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
          this._ToastrService.success(this.resMessage, 'Reset Password');
          this._Router.navigateByUrl('/auth/login');
        },
      });
    }

    resetPassForm.reset();
  }
}
