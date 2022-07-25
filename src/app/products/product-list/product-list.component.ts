import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [
    {id: 0, title: 'aaaaaaaa', description: 'desc: aaaaaaaa'},
    {id: 1, title: 'bbbbbbbb', description: 'desc: bbbbbbbb'},
    {id: 2, title: 'cccccccc', description: 'desc: cccccccc'},
    {id: 3, title: 'dddddddd', description: 'desc: dddddddd'}
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.products, 10000)
  }

}
