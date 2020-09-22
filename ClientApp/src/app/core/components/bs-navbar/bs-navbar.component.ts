import { Cart } from '../../../shared/models/cart';
import { map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { ShoppingCartService } from '../../../shared/services/backend/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  cart:Cart;
  totalCount:number;
  constructor(private authorizeService: AuthorizeService,private cartService:ShoppingCartService) { 

}

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.cartService.getCart().subscribe(cart => {this.cart = cart as Cart
      let count =0;
      this.cart.products.forEach(product => {
        count += product.quantity;
      })
      this.totalCount = count;
    });
    
    
    
  }
  
}
