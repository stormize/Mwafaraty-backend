using Microsoft.AspNetCore.Mvc;
using Mwafaraty.Business.Managers.IManagers;
using Mwafaraty.Controllers.Common;
using Mwafaraty.ViewModels.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mwafaraty.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IProductManager _productManager;

        public ProductController(IProductManager productManager)
        {
            _productManager = productManager;
        }

        [HttpPost("getProductById")]

        public async Task<IActionResult> GetProductById([FromBody]int productId)
        {
            await _productManager.GetProductById(productId, Language);
            return Ok();
        }

        [HttpPost("filter")]

        public async Task<IActionResult> Filter(ProductFilterVm model)
        {
            var res = await _productManager.Filter(model, Language);
            return Ok(res);
        }
    }
}
