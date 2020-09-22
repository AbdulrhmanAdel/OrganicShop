import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly url="api/products";

  constructor(private http:HttpClient) { }

  getAllProducts(query){
    return this.http.get(this.url + "?" + this.toStringQuery(query));
  }

  private toStringQuery(obj){
    let parts =[];
    for(var prop in obj){
      var value = obj[prop];
      if(value && value != undefined){
        parts.push(prop + "=" + value);
      }
    }
    return parts.join('&');
  }

  getProduct(id:number){
    return this.http.get("api/products/"+ id);
  }

  add(product){
    return this.http.post(this.url,product);
  }

  update(id:number , product){
    return this.http.put(this.url + "/" + id , product);
  }

  delete(id){
   return this.http.delete(this.url + "/" + id)
  }
}
