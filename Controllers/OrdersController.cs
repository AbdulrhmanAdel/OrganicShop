using System.Collections.Generic;
using System.Net;
using System.Data.Common;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OShop_au.Core;
using OShop_au.Core.Models;
using OShop_au.Controllers.Resources;

namespace OShop_au.Controllers
{
    [Route("api/orders")]
    public class OrdersController : Controller
    {
        private readonly IOrderRepository orderRepository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        

        public OrdersController(
            IOrderRepository orderRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.orderRepository = orderRepository;
        }


        [HttpGet]
        public IEnumerable<Order> GetOrders(string userId){
            var orders = orderRepository.GetOrders(userId);
            // return mapper.Map<IEnumerable<Order>,IEnumerable<OrderDto>>(orders);
            return orders;
        }

        [HttpGet("{id}")]
        public IActionResult GetOrder(int id){
            var order = orderRepository.GetOrder(id);
            if(order == null)
                return NotFound();

            // var orderDto =mapper.Map<Order,OrderDto>(order);
            return Ok(order);
        }

        [HttpPost]
        public IActionResult CreateOrder([FromBody]OrderDto orderDto){
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var order = mapper.Map<OrderDto,Order>(orderDto);

            orderRepository.CreateOrder(order);
            unitOfWork.CompleteAsync();

            
            return Ok(order);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id){
            
            var order = orderRepository.GetOrder(id);

            if(order == null)
                return NotFound();

            orderRepository.DeleteOrder(order);
            unitOfWork.CompleteAsync();

            return Ok("Deleted");
        }
    }
}