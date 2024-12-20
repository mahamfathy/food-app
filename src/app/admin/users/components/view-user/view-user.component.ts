import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewUserComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: IUser
  ) {
    if (this.data.imagePath) {
      this.data.imagePath =
        'https://upskilling-egypt.com:3006/' + this.data.imagePath;
    } else {
      this.data.imagePath = 'assets/img/default-avatar.avif';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
