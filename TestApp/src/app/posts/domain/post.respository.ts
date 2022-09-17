import { Observable } from 'rxjs'
import { PostEntity } from './post-entity';

export abstract class PostRepository {
    abstract getAllByUser(userId: number): Observable<[]>
    abstract getOnePost(postId: number): Observable<PostEntity>
    abstract deletePost(postId: number): Observable<any>
    abstract updatePost(post: PostEntity): Observable<PostEntity>
    abstract createPost(post: PostEntity): Observable<PostEntity>
}