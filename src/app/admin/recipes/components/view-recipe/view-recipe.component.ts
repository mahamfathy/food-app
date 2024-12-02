import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRecipe } from '../../interfaces/IRecipe';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
})
export class ViewRecipeComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IRecipe
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
