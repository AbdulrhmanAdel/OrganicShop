import { Order } from '../../../shared/models/order';
import { Cart } from '../../../shared/models/cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/backend/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart:Cart;
  order:Order;

  constructor(private cartService:ShoppingCartService ){}
  
  ngOnInit(){
    this.cartService.getCart().subscribe(cart => this.cart =cart as Cart);
  }
   
}
