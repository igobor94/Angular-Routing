import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductResolved } from 'src/app/core/product';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: any = {}
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    console.log(this.route.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {
    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error; 
    this.product = resolvedData;
  }
}
