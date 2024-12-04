import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FavService } from './services/fav.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss'],
})
export class FavComponent implements OnInit {
  imagePath: string = 'https://upskilling-egypt.com:3006/';
  favResData: any[] = [];
  constructor(
    private _FavService: FavService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this._FavService.getAllfavRecipes().subscribe({
      next: (res) => {
        this.favResData = res.data;
      },
    });
  }
  removeFavorite(id: number): void {
    this._FavService.onRemoveFav(id).subscribe({
      next: () => {},
      error: (err) => {
        this._ToastrService.error(
          'Failed to remove recipe from favorites',
          'Error'
        );
      },
      complete: () => {
        this._ToastrService.success('Recipe removed from favorites', 'Success');
        this._FavService.getAllfavRecipes().subscribe({
          next: (res) => {
            this.favResData = res.data;
          },
        });
      },
    });
  }
}
