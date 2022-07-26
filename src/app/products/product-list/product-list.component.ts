import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: any) => this.products = [...this.products, ...products])
    console.log(this.products)
  }

}
