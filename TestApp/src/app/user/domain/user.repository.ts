import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class UserRepository {

  abstract getAll(): Observable<[]>

}
