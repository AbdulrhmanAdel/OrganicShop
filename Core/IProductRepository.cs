using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using OShop_au.Core.Models;

namespace OShop_au.Core
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProducts(ProductQuery productQuery);
        Task<Product> GetProduct(int id);
        
        void Add(Product product);
        void Remove(Product product);
       
    }
}