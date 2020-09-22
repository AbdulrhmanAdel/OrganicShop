using System;
using OShop_au.Controllers.Dtos;

namespace OShop_au.Controllers.Resources
{
    public class OrderDto
    {
        public int Id { get; set; }

        public int CartId { get; set; }
        
        public DateTime DatePlaced { get; set; }
        public ShoppingCartDto Cart { get; set; }

        public ShippingAddressDto ShippingAddress { get; set; }

        public string UserId { get; set; }
    }
}