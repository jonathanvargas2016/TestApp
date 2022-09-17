import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_PLACEHOLDER } from 'src/app/config/Config';
import { PostEntity } from '../domain/post-entity';
import { PostRepository } from '../domain/post.respository';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService extends PostRepository {

  urlBase = URL_PLACEHOLDER

  constructor(private readonly http: HttpClient) {
    super()
  }

  getAllByUser(userId: number): Observable<[]> {
    let params = new HttpParams();
    params = params.append('userId', userId);

    return this.http.get(`${this.urlBase}/posts`, { params: params }).pipe(map((posts: any) => {
      return posts
    }))
  }

  createPost(post: PostEntity): Observable<PostEntity> {
    const body = JSON.stringify(post)
    const headers = new HttpHeaders({ "Content-Type": 'application/json; charset=UTF-8' });
    return this.http.post(`${this.urlBase}/posts`, body, { headers: headers }).pipe(map((data: any) => {
      return data
    }))
  }

  getOnePost(): Observable<PostEntity> {
    throw new Error('Method not implemented.');
  }
  deletePost(): Observable<void> {
    throw new Error('Method not implemented.');
  }
  updatePost(): Observable<PostEntity> {
    throw new Error('Method not implemented.');
  }

}
