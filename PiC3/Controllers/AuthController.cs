using System;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using PiC3.Helpers;

namespace PiC3.Controllers
{
    public class JwtPacket
    {
        public string Token { get; set; }
        public string ContactId { get; set; }
        public string OrgUserMappingKey { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
    }
    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class User
    {
        public string ContactId { get; set; }
        public string OrgUserMappingKey { get; set; }
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
    }

    [Authorize]
    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly AppSettings _appSettings;

        public AuthController(IConfiguration configuration, IOptions<AppSettings> appSettings)
        {
            _configuration = configuration;
            _appSettings = appSettings.Value;
        }

        //[AllowAnonymous]
        //[HttpPost("register")]
        //public IActionResult Register([FromBody] Models.User user)
        //{
        //    var jwt = new JwtSecurityToken();
        //    var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
        //    return Ok(new JwtPacket() { Token = encodedJwt, FullName = user.UserName});
        //}


/*         [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginData loginData)
        {
            User user = new Controllers.User();
            //bypass auth check
            if (loginData.Email == "test@test.com")
            {
                user.ContactId = "123456";
                user.FirstName = "Test";
                user.LastName = "Test";
                user.FullName = "Test Test";
                user.Email = loginData.Email;
                return Ok(CreateJwtPacket(user));
            }
            CorpServiceDevReference.UserServiceClient userServiceClient = new CorpServiceDevReference.UserServiceClient();
            var userAuth = await userServiceClient.AuthenticateAsync(loginData.Email, loginData.Password);
            if (userAuth.AuthenticateResult.Data != null)
            {
                user.ContactId = userAuth.AuthenticateResult.Data.ContactID;
                user.FirstName = userAuth.AuthenticateResult.Data.FirstName;
                user.LastName = userAuth.AuthenticateResult.Data.LastName;
                user.FullName = user.FirstName + " " + user.LastName;
                user.Email = loginData.Email;
                return Ok(CreateJwtPacket(user));
            }
            return NotFound("Email or Password is incorrect.");

        } */
         [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginData loginData)
        {
            User user = new Controllers.User();
            //bypass auth check
            if (loginData.Email == "test@test.com")
            {
                user.ContactId = "123456";
                user.OrgUserMappingKey = "54338";
                user.FirstName = "Test";
                user.LastName = "Test";
                user.FullName = "Test Test";
                user.Email = loginData.Email;
                return Ok(CreateJwtPacket(user));
            }
            //CorpServiceDevReference.UserServiceClient userServiceClient = new CorpServiceDevReference.UserServiceClient();
            OrgUserServiceDevReference.OrgUserServiceClient orgUserServiceClient = new OrgUserServiceDevReference.OrgUserServiceClient();

            OrgUserServiceDevReference.AuthenticationToken authenticationToken = new OrgUserServiceDevReference.AuthenticationToken();
            authenticationToken.EmailAddress = loginData.Email;
            authenticationToken.Password = loginData.Password;

            OrgUserServiceDevReference.AuthenticateCorpSvcsRequest authenticateCorpSvcsRequest = new OrgUserServiceDevReference.AuthenticateCorpSvcsRequest();
            authenticateCorpSvcsRequest.token = authenticationToken;

            var userAuth = await orgUserServiceClient.AuthenticateCorpSvcsAsync(authenticateCorpSvcsRequest);
            if (userAuth.AuthenticateCorpSvcsResult.IsValid)
            {
                user.ContactId = userAuth.identities[0].UserData.ContactID;
                user.FullName = userAuth.identities[0].UserData.FullName;
                user.OrgUserMappingKey = userAuth.identities[0].OrgUserMapping.OrgUserMappingKey.ToString();
                user.Email = loginData.Email;
                return Ok(CreateJwtPacket(user));
            }
            return NotFound("Email or Password is incorrect.");

        }
        JwtPacket CreateJwtPacket(User user)
        {
            var key = Encoding.UTF8.GetBytes(_appSettings.Secret);
            var signingKey = new SymmetricSecurityKey(key);
            var signingCredentials = new SigningCredentials(signingKey,SecurityAlgorithms.HmacSha256);
            var claims =new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.ContactId)
            };
            var jwt = new JwtSecurityToken(claims: claims, signingCredentials:signingCredentials);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
           
            return new JwtPacket() { Token = encodedJwt, FullName = user.FullName, ContactId = user.ContactId, OrgUserMappingKey = user.OrgUserMappingKey};
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