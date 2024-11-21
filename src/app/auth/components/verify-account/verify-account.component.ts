import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent {
  resMessage: string = '';
  verifyAccountForm = new FormGroup({
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
    this.verifyAccountForm.get('email')!.setValue(email || '');
  }

  onVerify(resetPassForm: FormGroup): void {
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
