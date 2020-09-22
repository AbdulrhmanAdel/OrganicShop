using System.ComponentModel.DataAnnotations;

namespace OShop_au.Core.Models
{
    public class Product
    {
        
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Title { get; set; }

        [Required]
        public double Price { get; set; }

        public Catagory Catagory { get; set; }

        [Required]
        public int CatagoryId { get; set; }

        
        public string ImageUrl { get; set; }

    }
}