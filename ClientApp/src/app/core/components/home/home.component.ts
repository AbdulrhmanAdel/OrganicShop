import { Product } from '../../../shared/models/product';
    
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/backend/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private porductService:ProductService
  ) { }

  ngOnInit() {
  }

}