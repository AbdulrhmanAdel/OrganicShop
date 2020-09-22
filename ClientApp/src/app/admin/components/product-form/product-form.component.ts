import { Router, ActivatedRoute } from '@angular/router';
import { KeyPairValue } from '../../../shared/models/keyPairValue';
import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/shared/services/backend/catagory.service';
import { ProductService } from 'src/app/shared/services/backend/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  catagories : KeyPairValue[];
  product:any = {};
  state:string;
  id:number;

  constructor(
    private catagoryService:CatagoryService,
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    ) {
     this.id = +this.route.snapshot.paramMap.get('id');

     if(this.id) this.productService.getProduct(this.id).subscribe(p =>{ this.product = p });
    }

  ngOnInit() {
    this.state = (this.id) ? "Edit" :"Add";
    this.catagoryService.GetCatagories().subscribe(catagories => this.catagories = <KeyPairValue[]>catagories)
  }


  submit(product){
    if(this.id){
      this.productService.update(this.id,product).subscribe();
    }
    else{
      product.catagoryId = Number(product.catagoryId);
      this.productService.add(product).subscribe();
    }

    this.router.navigate(["admin/products"]);
  }

  delete(id){
    if(confirm("Are you sure you want to delete this product?")){
      this.productService.delete(id).subscribe();
    }
  }

}
