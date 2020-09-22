using System.Collections;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace OShop_au.Core.Models
{
    public interface ICatagoryRepository
    {
         Task<IEnumerable<Catagory>> GetCatagories();
    }
}