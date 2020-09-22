import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ProductService } from 'src/app/shared/services/backend/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:Product[];
  subscription:Subscription;
  filterProducts:Product[];
  query:any={};
  isSortingDescending =false;

  constructor(
    private productService:ProductService,
  ) { }

  ngOnInit() {
   this.populateProducts();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  populateProducts(){
    this.subscription = this.productService.getAllProducts(this.query).subscribe(products => this.filterProducts = this.products = <Product[]>products);
  }

  filter(query:string){
    this.filterProducts =(query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }
  
  sortBy(query:string){
    this.query ={
      sortBy:query,
      isSortingDescending:this.isSortingDescending
    }
    this.populateProducts();
    this.isSortingDescending =!this.isSortingDescending;
  }

}
