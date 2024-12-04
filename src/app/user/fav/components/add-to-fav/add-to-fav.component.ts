import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-to-fav',
  templateUrl: './add-to-fav.component.html',
  styleUrls: ['./add-to-fav.component.scss'],
})
export class AddToFavComponent {
  imagePath = 'https://upskilling-egypt.com:3006/';
  constructor(
    public dialogRef: MatDialogRef<AddToFavComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      id: number;
      imagePath: string;
      description: string;
    }
  ) {}

  confirmAddToFavorites(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
