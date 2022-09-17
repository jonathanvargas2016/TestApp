import { Component, OnInit } from '@angular/core';
import { UserService } from "../../infraestructure/user.service";
import { UserEntity } from "../../domain/user-entity";

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  users: UserEntity[] = []
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getAll().subscribe((res: any) => {
      this.users = res.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
          phone: user.phone,
          company: user.company.name
        }
      })
    })
  }

}
