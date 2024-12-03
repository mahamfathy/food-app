import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  oldPasswordVisible: boolean = false;
  hideNewPassword: boolean = false;
  hideConfirmPassword: boolean = false;

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
    confirmNewPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
  });
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _AuthService: AuthService,
    private _LocalStorageService: LocalStorageService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(changePassForm: FormGroup): void {
    this._AuthService.onChangePassword(changePassForm.value).subscribe({
      next: (res) => {
        this.dialogRef.close();
      },
      error: (err) => {
        if (
          err.error.message &&
          Object.keys(err.error.additionalInfo).length === 0
        ) {
          this._ToastrService.error(err.error.message, 'Error');
        } else {
          const map = new Map(Object.entries(err.error.additionalInfo.errors));
          for (let [msg, val] of map) {
            this._ToastrService.error(JSON.stringify(val), msg);
          }
        }
      },
      complete: () => {
        this._ToastrService.success(
          'Your password has been changed successfully',
          'Success'
        );
        this._LocalStorageService.removeItem('userToken');
        this._Router.navigate(['/auth/']);
      },
    });
  }
  togglePasswordVisibility(): void {
    this.oldPasswordVisible = !this.oldPasswordVisible;
  }
}
