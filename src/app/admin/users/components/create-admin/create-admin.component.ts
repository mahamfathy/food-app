import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss'],
})
export class CreateAdminComponent {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  imgSrc: any;
  files: File[] = [];
  createAdminForm = new FormGroup({
    userName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
      ),
    ]),
    profileImage: new FormControl(null),
  });
  resMessage: string = '';
  constructor(
    private _UserService: UserService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onCreateAdmin(data: FormGroup): void {
    let myData = new FormData();
    Object.keys(data.value).forEach((key) => {
      myData.append(key, data.value[key]);
    });
    if (this.files.length > 0) {
      myData.append('profileImage', this.files[0]);
    }

    this._UserService.createAdmin(myData).subscribe({
      next: (res) => {
        this.resMessage = res.message;
      },
      error: (err) => {
        if (err.error.message && !err.error.additionalInfo) {
          this._ToastrService.error(err.error.message, 'Error');
        } else {
          const map = new Map(Object.entries(err.error.additionalInfo.errors));
          for (let [msg, val] of map) {
            this._ToastrService.error(JSON.stringify(val), msg);
          }
        }
      },
      complete: () => {
        this._ToastrService.success(this.resMessage, 'Success');
        this._Router.navigateByUrl('../');
      },
    });
  }
}
