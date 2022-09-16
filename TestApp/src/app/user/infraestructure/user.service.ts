import {Injectable} from '@angular/core';
import {UserRepository} from "../domain/user.repository";
import {Observable} from "rxjs";
import {UserEntity} from "../domain/user-entity";
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

  // delete(id: number): Observable<UserEntity> {
  // }

  getAll(): Observable<UserEntity[]> {
    return this.http.get(`${this.urlBase}/users`).pipe(map((users: any) => {
      const userEntityGet: UserEntity[] = users.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
          phone: user.phone,
          company: user.company.name
        }
      })
      return userEntityGet
    }));
  }

  // getOne(id: number): Observable<UserEntity> {
  //   return undefined;
  // }
  //
  // update(user: UserEntity): Observable<UserEntity> {
  //   return undefined;
  // }
}
