import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
})
export class ViewRecipeComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewRecipeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      id: number;
      imagePath: string;
      description: string;
      creationDate: string;
      modificationDate: string;
    }
  ) {}

  close(): void {
    this.dialogRef.close(false);
  }
}
