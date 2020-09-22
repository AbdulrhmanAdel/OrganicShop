using System.Collections;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using OShop_au.Core;
using System.Collections.Generic;
using OShop_au.Core.Models;
using OShop_au.Controllers.Resources;
using AutoMapper;
using OShop_au.Models;
using OShop_au.Persistence;

using System.Linq;

namespace OShop_au.Controllers
{
    [Route("api/products")]
    public class ProductsController : Controller
    {
        private readonly IProductRepository productRepository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        

        public ProductsController(
            IProductRepository productRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper
              
            )
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.productRepository = productRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> GetProducts(ProductQuery productQuery)
        {
            return await productRepository.GetProducts(productQuery);
        
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id){
            
            var product =  await productRepository.GetProduct(id);

            if(product == null)
                return NotFound();

            return Ok(product);
        }


        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            productRepository.Add(product);
            await unitOfWork.CompleteAsync();

            return Ok("Successfully Added");

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id,[FromBody] ProductDto productResource){
            
            if(!ModelState.IsValid)
                return BadRequest();
            var product = await productRepository.GetProduct(id);

            if(product == null)
                return NotFound();

            mapper.Map<ProductDto,Product>(productResource,product);           

            await unitOfWork.CompleteAsync();

            return Ok(mapper.Map<Product,ProductDto>(product));

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id){
            
            
            var product = await productRepository.GetProduct(id);

            if(product == null)
                return NotFound();

            productRepository.Remove(product);

            await unitOfWork.CompleteAsync();

            return Ok("Deleted");

        }
    }
}