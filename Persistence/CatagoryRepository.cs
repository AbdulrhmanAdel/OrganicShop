using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OShop_au.Core.Models;
using OShop_au.Persistence;


namespace OShop_au.Persistence
{
    public class CatagoryRepository : ICatagoryRepository
    {
        private readonly OShopDbContext db;

        public CatagoryRepository(OShopDbContext db)
        {
            this.db = db;

        }
        public async Task<IEnumerable<Catagory>> GetCatagories()
        {
            return await this.db.Catagories.OrderBy( n => n.Name).ToListAsync();
        }
    } 
}