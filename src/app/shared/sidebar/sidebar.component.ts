import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
interface IMenu {
  link: string;
  text: string;
  icon: string;
  isActive: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menu: IMenu[] = [
    {
      link: '/dashboard/home',
      text: 'Home',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      link: '/dashboard/users',
      text: 'Users',
      icon: 'fa-solid fa-user-group',
      isActive: this.isAdmin(),
    },
    {
      link: '/dashboard/recipes',
      text: 'Recipes',
      icon: 'fa-solid fa-bowl-food',
      isActive: this.isUser(),
    },
    {
      link: '/dashboard/categories',
      text: 'Categories',
      icon: 'fa-solid fa-table-cells',
      isActive: this.isAdmin(),
    },
    {
      link: '/dashboard/fav',
      text: 'Fav',
      icon: 'fa-solid fa-heart',
      isActive: this.isUser(),
    },
    {
      link: '/dashboard/change-password',
      text: 'Chnage Password',
      icon: 'fa-solid fa-lock',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      link: '/auth',
      text: 'Logout',
      icon: 'fa-solid fa-right-from-bracket',
      isActive: this.isAdmin() || this.isUser(),
    },
  ];
  constructor(private _AuthService: AuthService) {}
  isAdmin(): boolean {
    return this._AuthService.role == 'SuperAdmin';
  }
  isUser(): boolean {
    return this._AuthService.role == 'SystemUser';
  }
}
