import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url:string = "api/orders"

  constructor(private http:HttpClient,private cartService:ShoppingCartService) { }

  placeOrder(order){
    console.log(order)
    let result =  this.http.post(this.url,order);
    this.cartService.clearCart().subscribe();
    return result;
  }

  getOrdersByUser(userId:string){
    return this.http.get(this.url+"?userId="+userId);
  }

  getOrderById(id:number){
    return this.http.get(this.url + "/" + id);
  }
  getAllOrders(){
    return this.http.get(this.url);
  }

  deleteOrder(id:number){
    return this.http.delete(this.url + "/" + id);
  }
}
