using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OShop_au.Core.Models;

namespace OShop_au.Core
{
    public interface ICartRepository
    {
        Task<IEnumerable<ShoppingCart>> GetCarts();
        void CreateCart(ShoppingCart cart);
        ShoppingCart UpdateCart(int id , CartProduct productCart , bool remove);
        ShoppingCart GetCart(int id);
        void DeleteCart(ShoppingCart shoppingCart);
    }
}