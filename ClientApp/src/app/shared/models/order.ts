import { Cart } from './cart';
export class Order{
  datePlaced:Date
    constructor(public cartId:number,public userId:string,public shippingAddress:ShippingAddress) {}
}


interface ShippingAddress{
    name:string,
    addressLine:string,
    city:string
}