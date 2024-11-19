import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword: boolean = true;
  files: File[] = [];
  registerForm!: FormGroup;
  resMessage: string = '';
  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService
  ) {
    this.registerForm = this._FormBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$'
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  onSelect(event: { addedFiles: File[] }) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onRegister(): void {
    if (this.registerForm.valid) {
      const formData = new FormData();
      Object.keys(this.registerForm.value).forEach((key) => {
        formData.append(key, this.registerForm.value[key]);
      });
      this.files.forEach((file, index) => {
        formData.append(`file_${index}`, file, file.name);
      });
      formData.forEach((value, key) => {
        console.log(key, value);
      });
    }
    this._AuthService.registerForm(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
