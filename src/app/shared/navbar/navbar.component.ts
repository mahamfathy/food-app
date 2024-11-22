import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userName: string | null = '';
  imagePath: string | null = '';
  constructor(
    private _LocalStorageService: LocalStorageService,
    private _AuthService: AuthService
  ) {
    this.userName = this._LocalStorageService.getItem('userName');
    if (this._LocalStorageService.getItem('userToken') !== null) {
      this._AuthService.getUser().subscribe({
        next: (res) => {
          console.log(res);

          this.imagePath = `http://upskilling-egypt.com:3006/${res.imagePath}`;
          console.log(this.imagePath);
        },
      });
    }
  }
  logout(): void {
    this._AuthService.onLogout();
  }
}
