
import { Component, OnInit, Input, ɵSWITCH_COMPILE_PIPE__POST_R3__ } from '@angular/core';
import { ShoppingCartService } from '../../services/backend/shopping-cart.service';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product:Product;
  cart:Cart;
  @Input("show-actions") showActions = true;

  constructor(private cartService:ShoppingCartService) { 
    this.cartService.getCart().subscribe(cart => {
          this.cart =cart as Cart
    });
  }


  addToCart(){
    this.cartService.addToCart(this.product);
  }

  
  getQuantity(product:Product){
    if(this.cart == null || this.cart == undefined) return 0;
    let Product =this.cart.products.find(p => p.productId == product.id);
    return Product.quantity ? Product.quantity : 0 ;
    
  }
}
