using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OShop_au.Persistence;


namespace OShop_au.Controllers
{
    [Route("api/tests")]
    public class TestController : Controller
    {
        private readonly OShopDbContext db;
        public TestController(OShopDbContext db)
        {
            this.db = db;

        }

        [HttpGet]
        public IActionResult GetRoles(){
            
            var roles = db.UserRoles.ToList();
            return Ok(roles);
        }
    }
}