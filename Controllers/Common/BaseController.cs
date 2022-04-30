using Microsoft.AspNetCore.Mvc;
using Mwafaraty.ViewModels.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers.Common
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected string Language { get {
                return Request.Headers["Accept-Language"].FirstOrDefault() != null ? Request.Headers["Accept-Language"].FirstOrDefault() : Languages.En.ToString();
            }  }

        protected ResponseVm<TData> BuildResponse<TData>(TData data) 
        {
            ResponseVm<TData> response = new ResponseVm<TData>();
            response.BuildSuccessfullResponse(data);
            return response;
        }
    }
}
