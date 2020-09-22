import { Methouds } from '../../../shared/models/priceMethods';
import { Cart } from '../../../shared/models/cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/backend/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart:Cart;
  totalCount:number;
  totalPrice:number ;
 
  constructor(private cartService:ShoppingCartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {this.cart = cart as Cart
      this.totalCount= Methouds.totalQuantity(cart as Cart)
      this.totalPrice =Methouds.TotalPrice(cart as Cart)
    });
  }

  clearCart(){
    this.cartService.clearCart().subscribe();
  }
}
