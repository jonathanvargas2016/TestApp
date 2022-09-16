import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {ListUserComponent} from "./presentation/list-user/list-user.component";
import {PageUserComponent} from "./presentation/page-user/page-user.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ListUserComponent, PageUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule {
}
