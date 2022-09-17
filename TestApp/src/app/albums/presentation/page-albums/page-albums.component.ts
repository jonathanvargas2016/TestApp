import { Component, OnInit } from '@angular/core';
import { AlbumEntity } from '../../domain/album-entity';
import { AlbumsService } from '../../infraestructure/albums.service';

@Component({
  selector: 'app-page-albums',
  templateUrl: './page-albums.component.html',
  styleUrls: ['./page-albums.component.css']
})
export class PageAlbumsComponent implements OnInit {
  albums: AlbumEntity[] = []
  page = 1

  constructor(private readonly albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums(this.page)
  }

  getAlbums(page: number){
    this.page = page
    this.albumsService.getAll(page).subscribe((res)=> {
      this.albums = res
    })
  }

}
