import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
  
  constructor(private http:HttpClient) { }

  GetCatagories(){
    return this.http.get('api/catagories');
  }
}
