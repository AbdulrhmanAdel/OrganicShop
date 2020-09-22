import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { CatagoryService } from './services/backend/catagory.service';
import { OrderService } from './services/backend/order.service';
import { ProductService } from './services/backend/product.service';
import { ShoppingCartService } from './services/backend/shopping-cart.service';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    OrderService,
    CatagoryService,
    ProductService,
    ShoppingCartService
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
