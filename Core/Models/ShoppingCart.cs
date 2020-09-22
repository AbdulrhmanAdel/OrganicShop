using System.Collections.ObjectModel;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System;

namespace OShop_au.Core.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }

        
        public DateTime LastCreated { get; set; }
        
        public ICollection<CartProduct> Products { get; set; }
        
        public ShoppingCart()
        {
            Products =new Collection<CartProduct>(); 
        }

    }
}