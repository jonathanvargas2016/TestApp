import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { PageAlbumsComponent } from './presentation/page-albums/page-albums.component';
import { ListAlbumsComponent } from './presentation/list-albums/list-albums.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageAlbumsComponent, ListAlbumsComponent],
  imports: [
    CommonModule,
    // AlbumsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AlbumsModule { }
