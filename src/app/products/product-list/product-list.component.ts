import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  pageTitle: string = '';

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
    this.pageTitle = this.route.snapshot.data['pageTitle']
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: any) => this.products = [...this.products, ...products])
    console.log(this.products)
  }

}
