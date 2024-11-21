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
    code: new FormControl('', [Validators.required]),
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

  onVerify(verifyAccountForm: FormGroup): void {
    if (verifyAccountForm.valid) {
      this._AuthService.onVerifyAccount(verifyAccountForm.value).subscribe({
        next: (res) => {
          this.resMessage = res.message;
        },
        error: (err) => {
          this._ToastrService.error(
            err.message || 'An unexpected error occurred',
            'Error'
          );
        },
        complete: () => {
          this._ToastrService.success(this.resMessage, 'Account Verified');
          this._Router.navigateByUrl('/auth/login');
        },
      });
    }
  }
}
