using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers.IManagers;
using Mwafaraty.Controllers.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers
{
    public class LookupController : BaseController
    {
        private readonly ILookupManager _lookupManager;
        public LookupController(ILookupManager lookupManager)
        {
            _lookupManager = lookupManager;
        }
        [HttpPost("getAllCities")]

        public async Task<IActionResult> GetAllCities()
        {
            var res = await _lookupManager.GetAllCities(Language);
            return Ok(res);
        }
        [HttpPost("getAllColors")]

        public async Task<IActionResult> GetAllColors()
        {
            var res = await _lookupManager.GetAllColors(Language);
            return Ok(res);
        }
    }
}
