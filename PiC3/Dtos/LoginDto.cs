using System.ComponentModel.DataAnnotations;

namespace PiC3.Dtos
{
    public class LoginDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(6)]
        public string Password { get; set; }
    }
}