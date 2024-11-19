import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string = '';
  constructor(private _LocalStorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.userName = this._LocalStorageService.getItem('userName') || '';
  }
}
