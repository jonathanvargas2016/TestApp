import { Observable } from "rxjs";

export abstract class AlbumRepository {
    abstract getAll(page: number): Observable<[]>
}