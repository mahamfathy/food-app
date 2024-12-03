import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/users/services/user.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName: string | null = '';
  imagePath: string = '';
  constructor(
    private _LocalStorageService: LocalStorageService,
    private _AuthService: AuthService,
    private _UserService: UserService
  ) {}
  ngOnInit(): void {
    this._UserService.userName$.subscribe((name) => {
      this.userName = name;
    });
    if (this._LocalStorageService.getItem('userToken') !== null) {
      this._AuthService.getUser().subscribe({
        next: (res) => {
          if (res.imagePath !== null) {
            this.imagePath = `http://upskilling-egypt.com:3006/${res.imagePath}`;
          } else {
            this.imagePath = 'assets/img/avatar.svg';
          }
        },
      });
    }
  }
  logout(): void {
    this._AuthService.onLogout();
  }
}
