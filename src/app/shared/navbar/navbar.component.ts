import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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

          this.imagePath = res.imagePath['name'];
          console.log(res);
        },
      });
    }
  }
  ngOnInit(): void {}
  logout(): void {
    this._AuthService.onLogout();
  }
}
