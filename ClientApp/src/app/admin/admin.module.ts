import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';

import { SharedModule } from './../shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { CartReviewComponent } from './components/cart-review/cart-review.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    CartReviewComponent,
    OrderReviewComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'admin/products/new',component:ProductFormComponent,canActivate:[AuthorizeGuard]},
      {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthorizeGuard]},
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthorizeGuard]},
      {path:'admin/orders/:id',component:OrderReviewComponent,canActivate:[AuthorizeGuard]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthorizeGuard]}
    ]),
  ],
  exports:[
    CartReviewComponent
  ]
})
export class AdminModule { }
