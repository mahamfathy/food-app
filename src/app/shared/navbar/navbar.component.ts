import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userName: string | null = '';
  constructor(private _LocalStorageService: LocalStorageService) {
    this.userName = _LocalStorageService.getItem('userName');
  }
}
