using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OShop_au.Core;
using OShop_au.Core.Models;

namespace OShop_au.Persistence
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OShopDbContext db;
        public OrderRepository(OShopDbContext db)
        {
            this.db = db;

        }
        public void CreateOrder(Order order)
        {
            order.DatePlaced =DateTime.Now;
            db.Orders.Add(order); 
        }

        public Order GetOrder(int id)
        {   
            return  db.Orders.Include(o => o.Cart).ThenInclude(c => c.Products).ThenInclude(p => p.Product).SingleOrDefault(o=> o.Id == id);
        }

        

        public IEnumerable<Order> GetOrders(string userId)
        {   if(!string.IsNullOrWhiteSpace(userId))
                return db.Orders.Include(o => o.Cart).
                                    ThenInclude(c => c.Products)
                                    .Where(o => o.UserId == userId).ToList();
            
            return db.Orders.Include(o => o.Cart).ThenInclude(c => c.Products).Include(o => o.User).ToList();
        }

        void IOrderRepository.DeleteOrder(Order order)
        {
            db.Orders.Remove(order);
        }

        
        
    }
}