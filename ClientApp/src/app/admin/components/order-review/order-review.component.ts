import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/backend/order.service';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {
  order;
  id:number;
 
  constructor(
    private orderService:OrderService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.id =+this.route.snapshot.paramMap.get("id");
    this.orderService.getOrderById(this.id).subscribe(order => this.order = order);
  }

  deleteOrder(){
    this.orderService.deleteOrder(this.id).subscribe();
    this.router.navigate(["/admin/orders"]);
  }

}
