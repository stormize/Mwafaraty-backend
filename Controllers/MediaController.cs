using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers;
using Mwafaraty.Business.Managers.IManagers;
using Mwafaraty.Controllers.Common;
using Mwafaraty.ViewModels.Media;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers
{
    
    public class MediaController : BaseController
    {
        private readonly IMediaManager _mediaManager;
        public MediaController(IMediaManager mediaManager)
        {
            _mediaManager = mediaManager;
        }
        [HttpPost("addImage")]

        public async Task<IActionResult> Filter(MediaVm model)
        {
           await _mediaManager.AddFile(model);
            return Ok();
        }
    }
}
