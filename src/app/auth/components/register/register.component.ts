import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword: boolean = true;
  constructor() {}
  registerForm: FormData = new FormData();
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  onRegister(): void {}
}
