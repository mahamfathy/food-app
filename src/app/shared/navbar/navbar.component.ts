import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/admin/users/services/user.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userName: string | null = '';
  imagePath: string = 'assets/img/avatar.svg';
  constructor(
    private _AuthService: AuthService,
    private _UserService: UserService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this._UserService.userName$.subscribe((name) => {
      this.userName = name;
    });

    this._UserService.imagePath$.subscribe((path) => {
      this.imagePath = path
        ? `http://upskilling-egypt.com:3006/${path}`
        : 'assets/img/avatar.svg';
    });

    if (this._AuthService.getRole()) {
      this._UserService.fetchUser().subscribe({
        error: (err) => console.error('Failed to fetch user:', err),
      });
    }
  }
  logout(): void {
    this._AuthService.onLogout();
  }
  openChangePasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
