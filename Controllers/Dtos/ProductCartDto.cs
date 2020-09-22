using OShop_au.Controllers.Resources;

namespace OShop_au.Controllers.Dtos
{
    public class ProductCartDto
    {
        public int ProductId { get; set; }
        public int CartId { get; set; } 

        public ProductDto Product { get; set; }

        public int Quantity { get; set; }

    }
}