import {Observable} from "rxjs";
import {UserEntity} from "./user-entity";

export abstract class UserRepository {
  // abstract getOne(id: number): Observable<UserEntity>
  abstract getAll(): Observable<UserEntity[]>
  // abstract update(user: UserEntity): Observable<UserEntity>
  // abstract delete(id: number): Observable<UserEntity>


}
