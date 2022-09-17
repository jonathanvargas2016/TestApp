import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user-routing.module').then(u => u.UserRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./posts/posts-routing.module').then(p => p.PostsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
