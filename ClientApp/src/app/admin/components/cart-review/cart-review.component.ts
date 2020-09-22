import { Component, OnInit, Input } from '@angular/core';
import { Methouds } from '../../../shared/models/priceMethods';
import { Cart } from '../../../shared/models/cart';


@Component({
  selector: 'cart-review',
  templateUrl: './cart-review.component.html',
  styleUrls: ['./cart-review.component.css']
})
export class CartReviewComponent implements OnInit {
@Input("cart") cart:Cart
  constructor() { }

  ngOnInit() {
  }

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
