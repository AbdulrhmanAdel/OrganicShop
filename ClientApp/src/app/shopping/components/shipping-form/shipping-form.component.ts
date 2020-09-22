import { Component, OnInit, Input } from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Order } from '../../../shared/models/order';
import { Router } from '@angular/router';
import { OrderService } from '../../../shared/services/backend/order.service';
import { Cart } from '../../../shared/models/cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input("cart") cart:Cart;
  shipping:any = {};
  user;

  constructor(
    private authorizeService:AuthorizeService,
    private router:Router,
    private orderService:OrderService
    ) { } 

  ngOnInit() {
    this.authorizeService.getUser().subscribe(user => this.user = user);
  }

  placeOrder() {
    let order =new Order(+this.cart.id,this.user.sub,this.shipping)
    this.orderService.placeOrder(order).subscribe(result => console.log(result));
    this.router.navigate(["/order-success"]);
  }  
}
