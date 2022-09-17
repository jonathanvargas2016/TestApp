import {Component, Input, OnInit} from '@angular/core';
import {UserEntity} from "../../domain/user-entity";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() usersData: UserEntity[] = []

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goPostsUser(id: number){
    this.router.navigateByUrl(`/posts/${id}`)
  }

}
