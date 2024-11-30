import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent {
  isReadOnly: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AddEditRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; isReadOnly: boolean }
  ) {
    this.isReadOnly = data.isReadOnly || false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
