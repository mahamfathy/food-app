import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent {
  isReadOnly: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AddEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; isReadOnly: boolean }
  ) {
    this.isReadOnly = data.isReadOnly || false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
