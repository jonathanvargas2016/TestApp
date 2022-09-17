import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagePostsComponent} from "./presentation/page-posts/page-posts.component";

const routes: Routes = [
  {path:'posts/:id', component: PagePostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
