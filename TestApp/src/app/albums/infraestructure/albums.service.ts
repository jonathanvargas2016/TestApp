import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { URL_PLACEHOLDER } from 'src/app/config/Config';
import { AlbumRepository } from '../domain/album.repository';
import { SortColumnsEntity } from '../domain/sortColums-entity';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends AlbumRepository {

  urlBase = URL_PLACEHOLDER

  constructor(private readonly http: HttpClient) {
    super()
  }

  getAll(page: number, sort: SortColumnsEntity): Observable<[]> {
    let params = new HttpParams();

    if (sort.column != '' && sort.way != '') {
      params = params.append('_sort', sort.column);
      params = params.append('_order', sort.way);
    }
    params = params.append('_page', page);

    return this.http.get(`${this.urlBase}/albums`, { params: params }).pipe(map((albums: any) => {
      return albums
    }))
  }

  getBySearch(search: string): Observable<[]> {
    let params = new HttpParams();
    params = params.append('title_like', search);
    return this.http.get(`${this.urlBase}/albums`, { params: params }).pipe(map((albums: any) => {
      return albums
    }))
  }
}
