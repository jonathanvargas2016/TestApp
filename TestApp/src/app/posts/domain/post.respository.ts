import { Observable } from 'rxjs'
import { PostEntity } from './post-entity';

export abstract class PostRepository {
    abstract getAllByUser(userId: number): Observable<[]>
    abstract getOnePost(): Observable<PostEntity>
    abstract deletePost(): Observable<void>
    abstract updatePost(): Observable<PostEntity>
    abstract createPost(post: PostEntity): Observable<PostEntity>
}