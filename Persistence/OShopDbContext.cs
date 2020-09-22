using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using OShop_au.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OShop_au.Core.Models;

namespace OShop_au.Persistence
{
    public class OShopDbContext : ApiAuthorizationDbContext<User>
    {
        // public DbSet<ApplicationUser> TestUsers { get; set; }
        public DbSet<Product> Products { get; set; }    
        public DbSet<Order> Orders { get; set; }    
        public DbSet<Catagory> Catagories { get; set; }    
        public DbSet<ShoppingCart> Carts { get; set; }
        public DbSet<CartProduct> CartProducts { get; set; }
        
        public OShopDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
    }
}
