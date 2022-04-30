using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers.IManagers;
using Mwafaraty.Controllers.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers
{
    [Authorize]
    public class BrandController : BaseController
    {
        IBrandManager _brandManager;
        public BrandController(IBrandManager brandManager)
        {
            _brandManager = brandManager;
        }
        [HttpPost("filter")]

        public async Task<IActionResult> Filter([FromBody] int? categoryId)
        {
            var body = await _brandManager.Filter(categoryId, Language);
            var res = BuildResponse(body);
            return Ok(res);
        }
    }
}
