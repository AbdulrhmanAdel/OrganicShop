import { AuthorizeService } from '../../../../api-authorization/authorize.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { OrderService } from 'src/app/shared/services/backend/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
orders$;
user;
  constructor( 
    private orderService:OrderService,
    private authorizeService:AuthorizeService
    ) { }

  ngOnInit() {
    this.authorizeService.getUser().subscribe(user => this.user = user);
    this.orders$ =this.orderService.getOrdersByUser(this.user.sub);
  }

}
