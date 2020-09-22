import { Methouds } from '../../../shared/models/priceMethods';
import { Cart } from '../../../shared/models/cart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent  {
@Input("cart") cart:Cart

productPrice(product){
  return Methouds.productTotalPrice(product);
}
getToltalQuantity(){
  return Methouds.totalQuantity(this.cart);
}

getTotalPrice(){
  return Methouds.TotalPrice(this.cart);
}
}
