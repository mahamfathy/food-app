import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/users/services/user.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string = '';
  constructor(
    private _UserService: UserService,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this._UserService.userName$.subscribe((name) => {
      this.userName = name || '';
    });
  }
  isAdmin(): boolean {
    return this._AuthService.getRole() === 'SuperAdmin';
  }
}
