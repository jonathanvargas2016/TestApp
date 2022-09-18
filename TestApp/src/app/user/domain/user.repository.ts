import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { SortColumnsEntity } from "src/app/albums/domain/sortColums-entity";

@Injectable({
  providedIn: 'root'
})
export abstract class UserRepository {

  abstract getAll(sorted: SortColumnsEntity, search?: string): Observable<[]>

}
