import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from "./user/user.module";
import { PostsUserModule } from "./posts/posts.module";
import { AlbumsModule } from './albums/albums.module';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/navbar/footer/footer.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FlexboxComponent,
    GridLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    PostsUserModule,
    AlbumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
