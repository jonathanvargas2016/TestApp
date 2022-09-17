import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostEntity } from '../../domain/post-entity';
import { PostService } from '../../infraestructure/post.service';
@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.css']
})
export class PagePostsComponent implements OnInit {

  posts: PostEntity[] = []
  userId = 0
  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly postService: PostService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params.id
      if (this.userId) {
        this.getPosts(this.userId)
      } else {
        this.router.navigateByUrl('/home')
      }
    })
  }

  getPosts(userId: number) {
    this.postService.getAllByUser(userId).subscribe((data: any) => {
      this.posts = data
    })
  }



}
