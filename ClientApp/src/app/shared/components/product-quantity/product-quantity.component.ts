import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/backend/shopping-cart.service';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';


@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product;
  @Input("shopping-cart") cart;

  constructor(private cartService:ShoppingCartService) { 
    this.cartService.getCart().subscribe(cart => {
          this.cart =cart as Cart
    });
    
  } 

  addToCart(){
    this.cartService.addToCart(this.product);
    
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
    
  }

  getQuantity(product:Product){
    
    if(this.cart == null || this.cart == undefined) return 0;
    let Product =this.cart.products.find(p => p.productId == product.id);
    return  Product.quantity ? Product.quantity : 0 ;
  }

}
