using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OShop_au.Core;
using OShop_au.Core.Models;
using OShop_au.Persistence;


namespace OShop_au.Persistence
{
    public class CartRepository : ICartRepository
    {
        private readonly OShopDbContext db;
        public CartRepository(OShopDbContext db)
        {
            this.db = db;

        }
        public void CreateCart(ShoppingCart cart)
        {
            db.Carts.Add(cart);
        }

        public void DeleteCart(ShoppingCart shoppingCart)
        {   
            var productCarts = db.CartProducts.Where(cp => cp.CartId == shoppingCart.Id ).ToList();
            foreach(var pc in productCarts){
                db.CartProducts.Remove(pc);
            }
        }

        public  ShoppingCart GetCart(int id)
        {
            return  db.Carts.Include(pc => pc.Products).ThenInclude(p => p.Product).SingleOrDefault(c => c.Id == id);
        }

        public async Task<IEnumerable<ShoppingCart>> GetCarts()
        {
            return await db.Carts.Include(p =>p.Products).ToListAsync();
        }

        public  ShoppingCart UpdateCart(int id , CartProduct productCart , bool remove)
        {
            var cart =  GetCart(id);
            
            var cartProduct = cart.Products.SingleOrDefault( p => p.ProductId ==  productCart.ProductId);
            if(cartProduct != null){
                if(remove) {
                    if(cartProduct.Quantity <= 1) {
                        db.CartProducts.Remove(cartProduct);
                    }else{
                        cartProduct.Quantity--;
                    db.CartProducts.Update(cartProduct);
                    }
                }else{
                    cartProduct.Quantity++;
                    db.CartProducts.Update(cartProduct);
                }
            }else{
                productCart.Quantity = 1;
                db.CartProducts.Add(productCart);
            }

            return cart;
        }
    }
}