import {Injectable} from '@angular/core';
import {UserRepository} from "../domain/user.repository";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {URL_PLACEHOLDER} from "../../config/Config";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserRepository {
  urlBase = URL_PLACEHOLDER

  constructor(private readonly http: HttpClient) {
    super()
  }

  getAll(): Observable<[]> {
    return this.http.get(`${this.urlBase}/users`).pipe(map((users: any) => {
      return users
    }))
  }
}
