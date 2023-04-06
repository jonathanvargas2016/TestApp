import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { PageUserComponent } from './user/presentation/page-user/page-user.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user-routing.module').then(u => u.UserRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./posts/posts-routing.module').then(p => p.PostsRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./albums/albums-routing.module').then(a => a.AlbumsRoutingModule)
  },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageUserComponent },
  { path: 'flexbox', component: FlexboxComponent },
  {path: 'grid-layout', component: GridLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
