using System.Net.Http.Headers;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using OShop_au.Core.Models;
using OShop_au.Core;
using System.Linq;
using OShop_au.Persistence;
using AutoMapper;
using OShop_au.Controllers.Dtos;

namespace OShop_au.Controllers
{
    [Route("api/carts")]
    public class CartController : Controller
    {
        private readonly OShopDbContext db;
        private readonly IUnitOfWork unitOfWork;
        private readonly ICartRepository cartRepository;
        private readonly IMapper mapper;

        public CartController(
            OShopDbContext db,
            IUnitOfWork unitOfWork,
            ICartRepository cartRepository,
            IMapper mapper
            )
        {
            this.unitOfWork = unitOfWork;
            this.cartRepository = cartRepository;
            this.mapper = mapper;
            this.db = db;

        }

        [HttpGet]
        public async Task<IEnumerable<ShoppingCart>> GetCarts()
        {   var carts =  await cartRepository.GetCarts();
            // return mapper.Map<IEnumerable<ShoppingCart>,IEnumerable<ShoppingCartDto>>(carts);
            return carts;
        }

        [HttpGet("{id}")]
        public  IActionResult GetCarts(int id)
        {
            var cart =  cartRepository.GetCart(id);
           
            if(cart == null)
                return NotFound();
                
            return Ok(cart); 
        }

        [HttpPost]
        public async Task<IActionResult> CreateCart()
        {
            var cart = new ShoppingCart
            {
                LastCreated = DateTime.Now
            };

            cartRepository.CreateCart(cart);
            await unitOfWork.CompleteAsync();

            return Ok(cart);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCart(int id,[FromBody] CartProduct productCart,bool remove){
            
            var cart = cartRepository.UpdateCart(id , productCart ,remove);
        
            if(cart == null)
                return NotFound();

            db.SaveChanges();
            // unitOfWork.CompleteAsync();

            return Ok(cart);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCart(int id){
            var cart = cartRepository.GetCart(id);
            if(cart == null)
                return NotFound();
            
            cartRepository.DeleteCart(cart);
            unitOfWork.CompleteAsync();

            return Ok("Deleted");
        }
    }
}