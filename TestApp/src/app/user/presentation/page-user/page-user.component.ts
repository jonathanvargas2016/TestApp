import { Component, OnInit } from '@angular/core';
import { UserService } from "../../infraestructure/user.service";
import { UserEntity } from "../../domain/user-entity";
import { SortColumnsEntity } from 'src/app/albums/domain/sortColums-entity';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  users: UserEntity[] = []
  orderedBy: SortColumnsEntity = {
    column: "",
    way: ""
  }
  searchValue = ""
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getUsers(this.orderedBy)
  }

  getUsers(order: SortColumnsEntity, search?: string) {
    this.userService.getAll(order, search).subscribe((res: any) => {
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
    }, error => {
      console.log("error", error)
    })
  }

  orderColumnsBy(event: any) {
    this.getUsers(this.orderedBy)
  }

  onKey(event: any) {
    this.orderedBy.way = ''
    this.getUsers(this.orderedBy, this.searchValue)
  }

}
