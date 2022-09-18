import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio = 2000
  constructor() { }

  ngOnInit(): void {
    this.anio = new Date().getFullYear();
  }

}
