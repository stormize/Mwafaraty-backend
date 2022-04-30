using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers.IManagers;
using Mwafaraty.Controllers.Common;
using Mwafaraty.ViewModels.Store;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers
{
  
    public class StoreController : BaseController
    {
        private IStoreManager _storeManager;
        public StoreController(IStoreManager storeManager)
        {
            _storeManager = storeManager;
        }
        [HttpPost("addStore")]
        //public async Task<IActionResult> AddStore(LoginRequestVm loginRequestVm)
        //{
        //    var response = await _storeManager.
        //    return Ok(response);
        //}

        [HttpPost("filter")]
        public async Task<IActionResult> filter(FilterOutputVm loginRequestVm)
        {
            await _storeManager.Filter(loginRequestVm);
            return Ok(/*response*/);
        }
    }
}
