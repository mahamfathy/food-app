import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddToFavComponent } from './components/add-to-fav/add-to-fav.component';
import { FavRoutingModule } from './fav-routing.module';

@NgModule({
  declarations: [AddToFavComponent],
  imports: [CommonModule, FavRoutingModule, SharedModule],
})
export class FavModule {}
