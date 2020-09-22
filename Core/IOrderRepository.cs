using System.Collections.Generic;
using OShop_au.Core.Models;

namespace OShop_au.Core
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetOrders(string userId);

        Order GetOrder(int id);

        void DeleteOrder(Order order);

        void CreateOrder(Order order);


    }
}