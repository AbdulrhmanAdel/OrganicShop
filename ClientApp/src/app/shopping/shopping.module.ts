import { AdminModule } from './../admin/admin.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductFilterComponent } from '../products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    SharedModule,
    AdminModule,
    RouterModule.forChild([
      {path:"products",component:ProductsComponent},
      {path:"shopping-cart",component:ShoppingCartComponent},
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthorizeGuard]},
      {path:'order-success/:id',component:OrderSuccessComponent,canActivate:[AuthorizeGuard]},
      {path:'my/orders',component:MyOrdersComponent,canActivate:[AuthorizeGuard]},
    ])
  ],
  exports:[]
})
export class ShoppingModule { }
