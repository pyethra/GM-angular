import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textoBannerCorpo!: string;
  public textoDiferencial!: string;
  constructor() { }

  ngOnInit(): void {
    this.textoDiferencial! = 'Venha conhecer nosso diferencial';
    this.textoBannerCorpo! = 'Lorem ipsum dolor sit amet consectetur sequuntur vel.';
  }

}
