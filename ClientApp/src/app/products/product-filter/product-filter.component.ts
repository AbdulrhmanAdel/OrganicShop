import { Component, OnInit, Input } from '@angular/core';
import { KeyPairValue } from './../../shared/models/keyPairValue';
import { CatagoryService } from 'src/app/shared/services/backend/catagory.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  catagories:KeyPairValue[];
  @Input('catagory') category;
  
  constructor(private catagoryService:CatagoryService) { }

  ngOnInit() {
    this.catagoryService.GetCatagories().subscribe(catagories => this.catagories = <KeyPairValue[]>catagories)
  }

}
