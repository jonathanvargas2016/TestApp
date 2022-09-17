import {Observable} from "rxjs";

export abstract class UserRepository {

  abstract getAll(): Observable<[]>

}
