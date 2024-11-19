import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  backendMsg: string = '';
  constructor(
    private _AuthService: AuthService,
    private _ToasttrService: ToastrService,
    private _LocalStorageService: LocalStorageService
  ) {}
  onResetReq(resetReq: NgForm): void {
    if (resetReq.valid) {
      const formData = resetReq.value;
      this._AuthService.resetRequestForm(formData).subscribe({
        next: (res) => {
          this._LocalStorageService.setItem('email', formData.email);
          this.backendMsg = res.message;
        },
        error: (err) => {
          this._ToasttrService.error(err.error.message, 'Error');
        },
        complete: () => {
          this._ToasttrService.success(
            this.backendMsg || 'Password reset link sent!',
            'Reset Request'
          );
        },
      });
    }
  }
}
