import { Product } from './product';
export class Cart{
    id:number;
    lastCreated:Date;
    products:ProductCart[];
    
    constructor() { }

    get totalItemsCount(){
        let count = 0;
        this.products.forEach(cartProduct => {
            count += cartProduct.quantity
        });
        return count;        
    }

    get totalPrice(){
        let sum= 0;
        this.products.forEach(cartProduct => {
            sum +=cartProduct.product.price * cartProduct.quantity
        });
        return sum;
    }
}

export class ProductCart{
    id:number;
    productId:number;
    cartId:number;
    product:Product;
    quantity:number;

    get totalPrice(){ return this.product.price * this.quantity}
}