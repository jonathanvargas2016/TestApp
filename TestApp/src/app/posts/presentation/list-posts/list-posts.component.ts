import { Component, OnInit, Input } from '@angular/core';
import { PostEntity } from '../../domain/post-entity';
import { PostService } from '../../infraestructure/post.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgForm } from '@angular/forms';

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
  displayUpdatePost = false
  createPostModel: PostEntity = {
    title: '',
    body: '',
    userId: 0
  }
  updatePostModel: PostEntity = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  }



  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }

  createPost(form: NgForm) {
    this.showLoading()
    this.createPostModel.userId = this.userId
    this.postService.createPost(this.createPostModel).subscribe((data) => {
      if (data) {
        this.posts = [data, ...this.posts]
        form.reset()
        this.displayCreatePost = false
      }
      this.stopLoading()
    }, error => {
      console.log(error)
      this.stopLoading()
    })

  }

  updatePost(form: NgForm) {

    this.showLoading()
    this.postService.updatePost(this.updatePostModel).subscribe((dataUpdate) => {
      if (dataUpdate) {

        this.posts = this.posts.map((post) => {
          if (post.id === dataUpdate.id) {
            post = dataUpdate
          }
          return post
        })

        form.reset()
        this.displayUpdatePost = false
      }
      this.stopLoading()
    }, error => {
      this.stopLoading()
    })
  }

  showUpdateModal(postId: number | undefined) {
    if (postId) {
      this.showLoading()
      this.postService.getOnePost(postId).subscribe(data => {
        if (data) {
          this.updatePostModel = data
          this.displayUpdatePost = true
        }
        this.stopLoading()
      }, error => {
        this.stopLoading()
      })
    }
  }

  deletePost(postId: number | undefined) {
    if (postId) {
      this.postService.deletePost(postId).subscribe((resp) => {
        if(resp){
          this.posts = this.posts.filter((post) => {
            return post.id != postId
          })
        }
      })
    }
  }

  showLoading() {
    this.blockUI?.start('...Loading')
  }

  stopLoading() {
    this.blockUI?.stop()
  }

}
