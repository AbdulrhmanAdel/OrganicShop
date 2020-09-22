using System.Net.Http.Headers;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OShop_au.Core;
using OShop_au.Core.Models;
using System.Linq;
using System.Linq.Expressions;
using System;
using OShop_au.Persistence;


namespace OShop_au.Persistence
{
    public class ProductRepository : IProductRepository
    {
        private readonly OShopDbContext db;
        public ProductRepository(OShopDbContext db)
        {
            this.db = db;

        }
        public void Add(Product product)
        {
            db.Products.Add(product);
        }

        public async Task<Product> GetProduct(int id)
        {
           return await db.Products.FindAsync(id);
        }


        public void Remove(Product product)
        {
           db.Products.Remove(product);
        }

        public async Task<IEnumerable<Product>> GetProducts(ProductQuery productQuery)
        {   var query = db.Products
                            .Include(p => p.Catagory)
                            .AsQueryable();
            // apply Search
            if(productQuery.Search !=null){
                query = query.Where(p => p.Title.Contains(productQuery.Search));
            }

            var sortingColumnMap = new Dictionary<string , Expression<Func<Product,object>>>(){
            ["title"] = p => p.Title,
            ["price"] = p => p.Price ,
            };
            
            if(string.IsNullOrWhiteSpace(productQuery.SortBy) || !sortingColumnMap.ContainsKey(productQuery.SortBy)){
            }else{
                if(!productQuery.IsSortingDescending){
                    query = query.OrderBy(sortingColumnMap[productQuery.SortBy]);
                }else{
                    query = query.OrderByDescending(sortingColumnMap[productQuery.SortBy]);
                }
            }
                
            if(!string.IsNullOrWhiteSpace(productQuery.Catagory)){
                query = query.Where(p => p.Catagory.Name == productQuery.Catagory);
            }
            

            return await query.ToListAsync();
        }
      
    }
}