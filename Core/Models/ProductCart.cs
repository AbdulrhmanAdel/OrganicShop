namespace OShop_au.Core.Models
{
    public class CartProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product  Product { get; set; }
 
        public int CartId { get; set; }

        public ShoppingCart Cart { get; set; }

        public int Quantity { get; set; }
    }
}