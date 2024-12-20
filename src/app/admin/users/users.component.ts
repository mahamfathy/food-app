import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { IUser } from './interfaces/IUser';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  listData: IUser[] = [];
  tableRes: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageEvent!: PageEvent;
  searchVal: string = '';
  email: string = '';
  country: string = '';
  roleId: number[] = [1, 2];
  searchBy: string = 'userName';
  searchLabel: string = 'Search by name';
  searchPlaceholder: string = 'Abc';
  searchIcon: string = 'person';
  imagePath: string = 'https://upskilling-egypt.com:3006/';
  loading: boolean = false;
  constructor(
    private _UserService: UserService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  updateSearchPlaceholder(): void {
    if (this.searchBy === 'userName') {
      this.searchLabel = 'Search by name';
      this.searchIcon = 'person';
      this.searchPlaceholder = 'Abc';
    } else if (this.searchBy === 'email') {
      this.searchLabel = 'Search by email';
      this.searchIcon = 'email';
      this.searchPlaceholder = 'Abc@gmail.com';
    } else if (this.searchBy === 'country') {
      this.searchLabel = 'Search by country';
      this.searchIcon = 'public';
      this.searchPlaceholder = 'Egypt';
    }
  }
  getUsers(): void {
    this.loading = true;
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      [this.searchBy]: this.searchVal,
      groups: this.roleId,
    };
    this._UserService.getAllUsers(tableParams).subscribe({
      next: (res) => {
        this.loading = false;

        this.listData = res.data;
        this.tableRes = res;
      },
      error: (err) => {
        this.loading = false;

        this._ToastrService.error('Failed to load users', 'Error');
      },
    });
  }
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getUsers();
  }

  viewUser(user: IUser): void {
    const userCopy = JSON.parse(JSON.stringify(user));
    const dialogRef = this.dialog.open(ViewUserComponent, {
      data: userCopy,
    });

    this._UserService.getUsersById(user.id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {},
    });
  }
  deleteUser(user: IUser) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data: { text: 'user', userName: user.userName },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._UserService.deleteUsers(user.id).subscribe({
          next: () => {},
          error: () => {
            this._ToastrService.error('Failed to delete user', 'Error');
          },
          complete: () => {
            this._ToastrService.success(
              `${user.userName} has been deleted successfully!`,
              'Success'
            );
            this.getUsers();
          },
        });
      }
    });
  }
  clearFilter(): void {
    this.searchVal = '';
    this.searchBy = 'userName';
    this.searchLabel = 'Search by name';
    this.searchIcon = 'person';
    this.searchPlaceholder = 'Abc';
    this.roleId = [1, 2];
    this.getUsers();
  }
}
