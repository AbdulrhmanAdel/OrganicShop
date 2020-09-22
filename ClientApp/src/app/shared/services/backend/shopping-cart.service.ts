
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private url:string = "api/carts"
  constructor(private http:HttpClient) { }

  clearCart(){
    let cartId = this.getOrCreateCartId();
    return this.http.delete(this.url + "/" + cartId);
  }

  getCart(){
    let cartId = this.getOrCreateCartId();
    return this.http.get(this.url + "/" + cartId);
  }

  removeFromCart(product:Product){
    let cartId = this.getOrCreateCartId();
    this.updateCart(product.id,cartId,true).subscribe();
  }
  
  addToCart(product:Product){
    let cartId = this.getOrCreateCartId();
    this.updateCart(product.id,cartId).subscribe();
  }

  
  private getOrCreateCartId(){
      let cartId = localStorage.getItem('cartId');
      if(cartId) return cartId;

      this.create().subscribe(cart => {
        localStorage.setItem("cartId",cart["id"]);
        return cart["id"];
      });
  }

  private updateCart(productId,cartId,remove?:boolean){
    return this.http.put(this.url + "/" +cartId+"?remove="+remove,{productId:productId,cartId:cartId})
  }

  private create(){
    return this.http.post("api/carts",{});
  }

}
