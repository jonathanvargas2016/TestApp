import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAlbumsComponent } from './presentation/page-albums/page-albums.component';

const routes: Routes = [
  {path: 'albums', component: PageAlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
