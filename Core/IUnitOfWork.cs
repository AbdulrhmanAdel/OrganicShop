using System.Threading.Tasks;
namespace OShop_au.Core
{
    public interface IUnitOfWork
    {
         Task CompleteAsync();
    }
}