import { Injectable } from '@angular/core';
import { UserRepository } from "../domain/user.repository";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { URL_PLACEHOLDER } from "../../config/Config";
import { map } from 'rxjs/operators';
import { SortColumnsEntity } from 'src/app/albums/domain/sortColums-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserRepository {
  urlBase = URL_PLACEHOLDER

  constructor(private readonly http: HttpClient) {
    super()
  }

  getAll(sort: SortColumnsEntity, search?: string): Observable<[]> {
    //?title_like=m&_limit=10
    //?_sort=city&_order=desc
    let params = new HttpParams();
    if (sort.column != '') {
      if (sort.way != '') {
        params = params.append('_sort', sort.column);
        params = params.append('_order', sort.way);
      } else {
        if (search && search != '') {
          params = params.append(`${sort.column}_like`, search);
        }
      }

    }
    return this.http.get(`${this.urlBase}/users`, { params: params }).pipe(map((users: any) => {
      return users
    }))
  }
}
