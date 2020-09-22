using System.Collections.ObjectModel;
using Microsoft.AspNetCore.Identity;
using OShop_au.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OShop_au.Models
{
    public class User : IdentityUser
    {
        public ICollection<Order> Orders { get; set; }

        public User()
        {   
            Orders = new Collection<Order>();
        }
    }
}
