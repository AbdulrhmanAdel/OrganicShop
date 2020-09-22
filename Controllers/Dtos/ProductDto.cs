using System.Collections.Generic;
using OShop_au.Controllers.Dtos;

namespace OShop_au.Controllers.Resources
{
    public class ProductDto
    {
        public int Id { get; set; }

        
        public string Title { get; set; }

       
        public double Price { get; set; }

        public ValuePair Catagory { get; set; }
        public int CatagoryId { get; set; }

        public string ImageUrl { get; set; } 
    }
}