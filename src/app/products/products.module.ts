import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsResolver } from '../core/products.resolver';
import { ProductsEditInfoComponent } from './products-edit-info/products-edit-info.component';
import { ProductsEditTagsComponent } from './products-edit-tags/products-edit-tags.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductsEditInfoComponent,
    ProductsEditTagsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent,
        data: { pageTitle: 'Product List' },
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductsResolver },
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductsResolver },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsModule {}
