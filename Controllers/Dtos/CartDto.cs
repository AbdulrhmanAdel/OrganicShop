using System.Collections.ObjectModel;
using System.Collections.Generic;
using System;

namespace OShop_au.Controllers.Dtos
{
    public class ShoppingCartDto  
    {
        public int Id { get; set; }

        public DateTime LastCreated { get; set; }
 
        public ICollection<ProductCartDto> ProductCart { get; set; }
        public ShoppingCartDto()
        {
            ProductCart = new Collection<ProductCartDto>();
        } 

    }
}