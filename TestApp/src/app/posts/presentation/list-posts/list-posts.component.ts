import { Component, OnInit, Input } from '@angular/core';
import { PostEntity } from '../../domain/post-entity';
import { PostService } from '../../infraestructure/post.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI | undefined;
  @Input() posts: PostEntity[] = []
  @Input() userId = 0
  displayCreatePost = false
  createPostModel: PostEntity = {
    title: '',
    body: '',
    userId: 0
  }

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }

  createPost(){
    this.blockUI?.start('...Loading')
    this.createPostModel.userId = this.userId
    console.log(this.createPostModel)

    this.postService.createPost(this.createPostModel).subscribe((data) => {
      if(data){
        this.posts =  [...this.posts, data]
        this.displayCreatePost = false
      }else {

      }
      this.blockUI?.stop()
    })

  }


}
