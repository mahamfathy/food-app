import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  name: string = '';
  listData: ICategory[] = [];
  tableRes: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageEvent!: PageEvent;
  searchVal: string = '';
  constructor(
    private _CategoryService: CategoryService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getCategories();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { name: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addCategory(result);
      }
    });
  }

  getCategories(): void {
    let tableParams = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      name: this.searchVal,
    };
    this._CategoryService.getAllCategories(tableParams).subscribe({
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
    this.getCategories();
    console.log(e);
  }
  addCategory(data: any): void {
    this._CategoryService.onAddCategory(data).subscribe({
      next: (res) => {
        this.name = res.name;
      },
      error: (err) => {
        this._ToastrService.error('An unexpected error occurred', 'Error');
      },
      complete: () => {
        this.getCategories();

        this._ToastrService.success(
          `You have successfully added "${this.name}"`,
          'Success'
        );
      },
    });
  }

  editCategory(id: number, categoryName: string): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { name: categoryName, isReadOnly: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._CategoryService.updateCategory(id, result.name).subscribe({
          next: () => {},
          error: () => {
            this._ToastrService.error('Failed to update category', 'Error');
          },
          complete: () => {
            this._ToastrService.success(
              `Category "${result.name}" updated successfully!`,
              'Success'
            );
            this.getCategories();
          },
        });
      }
    });
  }
  viewCategory(category: ICategory): void {
    this._CategoryService.getCategoryById(category.id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {
        this.dialog.open(AddEditCategoryComponent, {
          data: { name: category.name, isReadOnly: true },
        });
      },
    });
  }
  deleteCategory(id: number) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._CategoryService.deleteCategory(id).subscribe({
          next: () => {},
          error: () => {
            this._ToastrService.error('Failed to Delete category', 'Error');
          },
          complete: () => {
            this._ToastrService.success(
              `Category has been deleted successfully!`,
              'Success'
            );
            this.getCategories();
          },
        });
      }
    });
    // this._CategoryService.deleteCategory(id).subscribe({
    //   next: (res) => {},
    //   error: () => {},
    //   complete: () => {
    //     this._ToastrService.success('Category deleted successfully', 'Success');
    //     this.getCategories();
    //   },
    // });
  }
}
