import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PagePostsComponent } from './presentation/page-posts/page-posts.component';
import { ListPostsComponent } from './presentation/list-posts/list-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// primeng 
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [
    PagePostsComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    // PostsRoutingModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    BlockUIModule.forRoot()
  ]
})
export class PostsUserModule { }
