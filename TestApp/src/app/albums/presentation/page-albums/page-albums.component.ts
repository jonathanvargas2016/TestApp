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
  constructor(private readonly albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums(this.page)
  }

  getAlbums(page: number){
    this.page = page
    this.albumsService.getAll(page, this.orderedBy).subscribe((res)=> {
      this.albums = res
    })
  }

  orderColumnsBy(event: any){

    if(this.orderedBy.column && this.orderedBy.way){
      console.log("colum", this.orderedBy.column)
      console.log("way", this.orderedBy.way)
      console.log("page", this.page)
      
      this.albumsService.getAll(this.page, this.orderedBy).subscribe((res) => {
        this.albums = res
      })
    }
  }
}
