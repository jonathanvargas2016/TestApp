import {Component, Input, OnInit} from '@angular/core';
import {UserEntity} from "../../domain/user-entity";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() usersData: UserEntity[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
