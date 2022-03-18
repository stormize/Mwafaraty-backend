using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers.Account;
using Mwafaraty.ViewModels.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers.Common
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AccountManager _accountManager;
        public AccountController(AccountManager accountManager)
        {
            _accountManager = accountManager;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequestVm loginRequestVm)
        {
           var response =  await _accountManager.Login(loginRequestVm);
            return Ok(response);
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequestVm registerRequestVm)
        {
            if (registerRequestVm == null || !ModelState.IsValid)
                return BadRequest();
            var response = await _accountManager.Register(registerRequestVm);

           
            
            return Ok(response);
        }
        [HttpPost("registerStoreAdmin")]
        [Authorize(Roles = "SuperAdmin")]
        public async Task<IActionResult> RegisterStoreAdmin(RegisterRequestVm registerRequestVm)
        {
            if (registerRequestVm == null || !ModelState.IsValid)
                return BadRequest();
            var response = await _accountManager.RegisterStoreAdmin(registerRequestVm);



            return Ok(response);
        }
        [HttpPost("forgotPassword")]
        
        public async Task<IActionResult> ForgotPassword(ForgotPasswordRequestVm forgotPasswordRequestVm)
        {
            var response = await _accountManager.ForgotPassword(forgotPasswordRequestVm);
            return Ok(response);
        }
        [HttpPost("resetPassword")]
        [Authorize]
        public async Task<IActionResult> ResetPassword(ResetPasswordRequestVm resetPasswordRequestVm)
        {
            var response = await _accountManager.ResetPassword( resetPasswordRequestVm);
            return Ok(response);
        }
        [HttpPost("changePassword")]
        [Authorize]
        public async Task<IActionResult> ChangePassword()
        {
            return Ok();
        }

    }
}
