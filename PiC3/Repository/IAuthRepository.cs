using System.Threading.Tasks;
using PiC3.Models;

namespace PiC3.Repository
{
    public interface IAuthRepository
    {
         Task<User> Login (string email, string password);
         Task<bool> UserExists(string email);

         
    }
}