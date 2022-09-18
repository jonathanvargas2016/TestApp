import { Observable } from "rxjs";
import { SortColumnsEntity } from "./sortColums-entity";

export abstract class AlbumRepository {
    abstract getAll(page: number, sort: SortColumnsEntity): Observable<[]>
}