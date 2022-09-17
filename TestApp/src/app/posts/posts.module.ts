import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PagePostsComponent } from './presentation/page-posts/page-posts.component';
import { ListPostsComponent } from './presentation/list-posts/list-posts.component';


@NgModule({
  declarations: [
    PagePostsComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsUserModule { }
