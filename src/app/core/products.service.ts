import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = [
    {id: 0, title: 'aaaaaaaa', description: 'desc: aaaaaaaa'},
    {id: 1, title: 'bbbbbbbb', description: 'desc: bbbbbbbb'},
    {id: 2, title: 'cccccccc', description: 'desc: cccccccc'},
    {id: 3, title: 'dddddddd', description: 'desc: dddddddd'}
  ]
  product: any = {};

  constructor() { }


  getProducts() {
    return of(this.products)
  }

  getProduct(id: number) {
    return this.products.find((product: any) => product.id === id)
  }
}
