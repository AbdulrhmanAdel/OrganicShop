using AutoMapper;
using OShop_au.Controllers.Dtos;
using OShop_au.Controllers.Resources;
using OShop_au.Core.Models;

namespace OShop_au.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {   
            // Domin To Resource
            CreateMap<Product,ProductDto>();
            
            CreateMap<Order,OrderDto>()
                .ForMember( od => od.ShippingAddress, opt => opt.MapFrom(o => new ShippingAddressDto{ Name=o.Name,AddressLine=o.Address,City=o.City}));
            
            CreateMap<ShoppingCart,ShoppingCartDto>();  
            
            CreateMap<CartProduct,ProductCartDto>();
            
            CreateMap<Catagory,ValuePair>();

            // Resource To Domin
            CreateMap<ProductDto,Product>()
                .ForMember(p => p.Id ,opt => opt.Ignore());

            CreateMap<OrderDto,Order>()
                .ForMember(o => o.DatePlaced,opt => opt.Ignore())
                .ForMember(o => o.Name ,opt => opt.MapFrom(od => od.ShippingAddress.Name))   
                .ForMember(o => o.Address ,opt => opt.MapFrom(od => od.ShippingAddress.AddressLine))   
                .ForMember(o => o.City ,opt => opt.MapFrom(od => od.ShippingAddress.City));   
            CreateMap<ShoppingCartDto,ShoppingCart>();  
            CreateMap<ProductCartDto,CartProduct>();
            
            CreateMap<ValuePair,Catagory>();

        }
    }
}