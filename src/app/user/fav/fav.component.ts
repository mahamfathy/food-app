import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  tableRes: any;
  pageSize: number = 5;
  pageNumber: number = 1;
  totalNumberOfRecords: number = 0;
  totalNumberOfPages: number = 0;
  constructor(
    private _FavService: FavService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getFavRecipes();
  }
  getFavRecipes(): void {
    this._FavService.getAllfavRecipes().subscribe({
      next: (res) => {
        this.favResData = res.data;
        this.tableRes = res;
        this.totalNumberOfRecords = res.totalNumberOfRecords;
        this.totalNumberOfPages = res.totalNumberOfPages;
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
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getFavRecipes();
    console.log(e);
  }
}
