import { Cart, ProductCart } from "./cart";

export class Methouds{
    
    static TotalPrice(cart:Cart){
        let totalPrice =0;
        cart.products.forEach(product => {
            totalPrice += product.quantity * product.product.price; 
        });
        return totalPrice;
    }

    static totalQuantity(cart:Cart){
        let totalQuantity =0;
        cart.products.forEach(product => {
            totalQuantity += product.quantity;
         });
         return totalQuantity;
    }

    static productTotalPrice(productCart : ProductCart){
        return productCart.product.price * productCart.quantity
    }

    
}