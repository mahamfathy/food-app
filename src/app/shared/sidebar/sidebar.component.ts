import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
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
  isCollapsed: boolean = false;
  @Output() toggleSidebar = new EventEmitter<boolean>();
  menu: IMenu[] = [
    {
      link: '/dashboard/home',
      text: 'Home',
      icon: 'fa-solid fa-lg fa-house',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      link: '/dashboard/admin/users',
      text: 'Users',
      icon: 'fa-solid fa-lg fa-user-group',
      isActive: this.isAdmin(),
    },
    {
      link: '/dashboard/admin/recipes',
      text: 'Recipes',
      icon: 'fa-solid fa-lg fa-bowl-food',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      link: '/dashboard/admin/categories',
      text: 'Categories',
      icon: 'fa-solid fa-lg fa-table-cells',
      isActive: this.isAdmin(),
    },
    {
      link: '/dashboard/user/favourite-recipes',
      text: 'Fav Recipes',
      icon: 'fa-solid fa-heart',
      isActive: this.isUser(),
    },
    {
      link: '/dashboard/profile',
      text: 'Change password',
      icon: 'fa-solid fa-lg fa-unlock-keyhole',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      link: '/auth',
      text: 'Logout',
      icon: 'fa-solid fa-lg fa-right-from-bracket',
      isActive: this.isAdmin() || this.isUser(),
    },
  ];
  constructor(private _AuthService: AuthService, public dialog: MatDialog) {}
  isAdmin(): boolean {
    return this._AuthService.role === 'SuperAdmin';
  }
  isUser(): boolean {
    return this._AuthService.role === 'SystemUser';
  }
  logout(): void {
    this._AuthService.onLogout();
  }
  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
    this.toggleSidebar.emit(this.isCollapsed);
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
