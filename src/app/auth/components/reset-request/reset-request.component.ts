import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-reset-request',
  templateUrl: './reset-request.component.html',
  styleUrls: ['./reset-request.component.scss'],
})
export class ResetRequestComponent {
  email: string = '';
  resMessage: string = '';
  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _LocalStorageService: LocalStorageService,
    private _Router: Router
  ) {}
  onResetReq(resetReq: NgForm): void {
    if (resetReq.valid) {
      const formData = resetReq.value;
      this._AuthService.resetRequestForm(formData).subscribe({
        next: (res) => {
          this._LocalStorageService.setItem('email', formData.email);
          this.resMessage = res.message;
        },
        error: (err) => {
          this._ToastrService.error(err.error.message, 'Error');
        },
        complete: () => {
          this._ToastrService.success(
            this.resMessage || 'Password reset link sent!',
            'Reset Request'
          );
          this._Router.navigateByUrl('/auth/reset-password');
        },
      });
    }
  }
}
