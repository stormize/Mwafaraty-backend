using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers;
using Mwafaraty.Business.Managers.IManagers;
using Mwafaraty.Controllers.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers
{
    [Authorize]
    public class ReviewController : BaseController
    {
        private readonly IReviewManager _reviewManager;

        public ReviewController(IReviewManager reviewManager)
        {
            _reviewManager = reviewManager;
        }
        [HttpPost("getAllReviewsForProduct")]

        public async Task<IActionResult> Filter([FromBody] int productId)
        {
            await _reviewManager.GetAllReviewsForProduct(productId);
            return Ok();
        }
    }
}
