import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { IUser } from './interfaces/IUser';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  name: string = '';
  listData: IUser[] = [];
  tableRes: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageEvent!: PageEvent;
  searchVal: string = '';
  email: string = '';
  country: string = '';
  roleId: number[] = [1, 2];
  imagePath: string = 'https://upskilling-egypt.com:3006/';
  constructor(
    private _UserService: UserService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AddEditCategoryComponent, {
  //     data: { name: '' },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.addCategory(result);
  //     }
  //   });
  // }

  getUsers(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      userName: this.searchVal,
      email: this.email,
      country: this.country,
    };
    this._UserService.getAllUsers(tableParams).subscribe({
      next: (res) => {
        this.listData = res.data;
        this.tableRes = res;
      },
      error: (err) => {
        this._ToastrService.error('Failed to load categories', 'Error');
      },
    });
  }
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getUsers();
    console.log(e);
  }
  // addCategory(data: any): void {
  //   this._UserService.onAddCategory(data).subscribe({
  //     next: (res) => {
  //       this.name = res.name;
  //     },
  //     error: (err) => {
  //       this._ToastrService.error('An unexpected error occurred', 'Error');
  //     },
  //     complete: () => {
  //       this.getUsers();

  //       this._ToastrService.success(
  //         `You have successfully added "${this.name}"`,
  //         'Success'
  //       );
  //     },
  //   });
  // }

  // editCategory(id: number, categoryName: string): void {
  //   const dialogRef = this.dialog.open(AddEditCategoryComponent, {
  //     data: { name: categoryName, isReadOnly: false },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this._UserService.updateCategory(id, result.name).subscribe({
  //         next: () => {},
  //         error: () => {
  //           this._ToastrService.error('Failed to update category', 'Error');
  //         },
  //         complete: () => {
  //           this._ToastrService.success(
  //             `Category "${result.name}" updated successfully!`,
  //             'Success'
  //           );
  //           this.getUsers();
  //         },
  //       });
  //     }
  //   });
  // }
  viewUser(user: IUser): void {
    this._UserService.getUsersById(user.id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {
        // this.dialog.open(AddEditCategoryComponent, {
        //   data: { name: user, isReadOnly: true },
        // });
      },
    });
  }
  deleteUser(id: number) {
    // const dialogRef = this.dialog.open(DeleteCategoryComponent, {
    //   data: id,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    // if (result) {
    //   this._UserService.deleteUsers(id).subscribe({
    //     next: () => {},
    //     error: () => {
    //       this._ToastrService.error('Failed to Delete category', 'Error');
    //     },
    //     complete: () => {
    //       this._ToastrService.success(
    //         `Category has been deleted successfully!`,
    //         'Success'
    //       );
    //       this.getUsers();
    //     },
    //   });
    // }
    // }
    // );
    // this._UserService.deleteCategory(id).subscribe({
    //   next: (res) => {},
    //   error: () => {},
    //   complete: () => {
    //     this._ToastrService.success('Category deleted successfully', 'Success');
    //     this.getUsers();
    //   },
    // });
  }
}
