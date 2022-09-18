import { Component, OnInit } from '@angular/core';
import { AlbumEntity } from '../../domain/album-entity';
import { SortColumnsEntity } from '../../domain/sortColums-entity';
import { AlbumsService } from '../../infraestructure/albums.service';

@Component({
  selector: 'app-page-albums',
  templateUrl: './page-albums.component.html',
  styleUrls: ['./page-albums.component.css']
})
export class PageAlbumsComponent implements OnInit {
  albums: AlbumEntity[] = []
  page = 1
  orderedBy: SortColumnsEntity = {
    column: "",
    way: ""
  }
  searchValue = ""
  constructor(private readonly albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums(this.page)
  }

  getAlbums(page: number) {
    this.page = page
    this.albumsService.getAll(page, this.orderedBy).subscribe((res) => {
      this.albums = res
    })
  }

  orderColumnsBy(event: any) {
    this.albumsService.getAll(this.page, this.orderedBy).subscribe((res) => {
      this.albums = res
    })
  }

  onKey(event: any){
    if(this.searchValue){
      this.albumsService.getBySearch(this.searchValue).subscribe((res) => {
        this.albums = res
      })
    }else {
        this.getAlbums(this.page)
    }
    
  }
}
