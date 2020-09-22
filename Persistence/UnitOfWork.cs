using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using OShop_au.Core;
using OShop_au.Persistence;

namespace OShop_au.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly OShopDbContext db;
        public UnitOfWork(OShopDbContext db)
        {
            this.db = db;

        }
        public async Task CompleteAsync()
        {
           await db.SaveChangesAsync();
        }
    }
}