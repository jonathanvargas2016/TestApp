import { Component, Input, OnInit } from '@angular/core';
import { AlbumEntity } from '../../domain/album-entity';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  @Input() albums: AlbumEntity[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
