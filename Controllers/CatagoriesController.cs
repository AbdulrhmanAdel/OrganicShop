using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OShop_au.Core.Models;

namespace OShop_au.Controllers
{
    [Route("api/catagories")]
    public class CatagoriesController : Controller
    {
        private readonly ICatagoryRepository catagoryRepository;

        public CatagoriesController(ICatagoryRepository catagoryRepository)
        {
            this.catagoryRepository = catagoryRepository;

        }

        [HttpGet]
        public async Task<IEnumerable<Catagory>> GetCatagories()
        {
            return await catagoryRepository.GetCatagories();
        }
    }
}