using System.Security.Principal;
using System;
using System.ComponentModel.DataAnnotations;
using OShop_au.Models;

namespace OShop_au.Core.Models
{
    public class Order
    {
        public int Id { get; set; }

        public DateTime DatePlaced { get; set; }

        [Required]
        public int CartId { get; set; }
        
        public ShoppingCart Cart { get; set; } 

        public string   Name { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }
         
    }
}