import { Component } from '@angular/core';
import { IRegister } from '../../interface/IRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword: boolean = true;
  files: File[] = [];
  registerForm: FormData = new FormData();
  registerData: IRegister = {
    username: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
  };
  constructor() {}
  onSelect(event: { addedFiles: File[] }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onRegister(): void {
    // this.registerForm.append('username', this.registerData.username);
    // this.registerForm.append('email', this.registerData.email);
    // this.registerForm.append('phone', this.registerData.phone);
    // this.registerForm.append('country', this.registerData.country);
    // this.registerForm.append('password', this.registerData.password);
    // this.registerForm.append(
    //   'confirmPassword',
    //   this.registerData.confirmPassword
    // );
  }
}
