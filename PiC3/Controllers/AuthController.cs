using System;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace PiC3.Controllers
{
    public class JwtPacket
    {
        public string Token { get; set; }
        public string UserName { get; set; }
    }
    public class LoginData{
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    [Authorize]
    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] Models.User user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return Ok(new JwtPacket() { Token = encodedJwt, UserName = user.UserName});
        }


        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginData loginData)
        {
            //check is user is authenticated in PiC
            return Ok(CreateJwtPacket(loginData));
        }
        JwtPacket CreateJwtPacket(LoginData loginData){
                    var jwt = new JwtSecurityToken();
                    var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                    return new JwtPacket() { Token = encodedJwt, UserName = loginData.UserName};
        }

        [HttpGet("Test")]
        public IActionResult Test()
        {
            return Ok("Super secret content, I hope you've got clearance for this...");
        }


        [HttpPost("post")]
        public IActionResult TestPost([FromBody] TokenRequest request)
        {
            return Ok(request);
        }

        [AllowAnonymous]
        [HttpPost("token")]
        public IActionResult RequestToken([FromBody] TokenRequest request)
        {
            if (request.Username == "darren" && request.Password == "warbar")
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, request.Username)
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["SecurityKey"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "localhost:50840",
                    audience: "localhost:50840",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }

            return BadRequest("Could not verify username and password");
        }

    }

/*     public class TokenRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    } */
}