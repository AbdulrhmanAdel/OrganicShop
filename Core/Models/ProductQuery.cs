namespace OShop_au.Core.Models
{
    public class ProductQuery
    {   
        public string Catagory { get; set; }
        public string Search { get; set; }
        public string SortBy { get; set; }
        
        public bool IsSortingDescending { get; set; }
    }
}