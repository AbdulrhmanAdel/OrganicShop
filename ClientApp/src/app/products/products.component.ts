import { Cart } from './../shared/models/cart';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/models/product';
import { ProductService } from '../shared/services/backend/product.service';
import { ShoppingCartService } from '../shared/services/backend/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  query:any= {};
  products:Product[];
  catagory:string;
  cart:Cart;

  constructor(
    private porductService:ProductService,
    route:ActivatedRoute,
    private cartService:ShoppingCartService
  ) {
    route.queryParamMap.subscribe(params => {
      this.catagory = params.get('catagory')
      this.populateProducts();
    });
   }
  
  ngOnInit() {
    this.cartService.getCart().subscribe(cart => this.cart =cart as Cart);
    this.populateProducts();
  }

  populateProducts(){
    this.query={ catagory:this.catagory }
    this.porductService.getAllProducts(this.query).subscribe(products => this.products = <Product[]>products);
  }
  
}
