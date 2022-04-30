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
  
   
    public class CategoriesController : BaseController
    {
        ICategoryManager _categoryManager;

        public CategoriesController(ICategoryManager categoryManager)
        {
            _categoryManager = categoryManager;

        }

        [HttpPost("filter")]
        public async Task<IActionResult> Filter()
        {
            
            var body = await _categoryManager.Filter(Language);
            var res = BuildResponse(body);
            return Ok(res);
        }

        [HttpPost("getAllCategoriesWithBrands")]
        public async Task<IActionResult> GetAllCategoriesWithBrands()
        {
            var body = await _categoryManager.GetAllCategoriesWithBrands(Language);
            var response = BuildResponse(body);
            return Ok(response);
        }
        [HttpPost("getAllParentCategoriesWithBrands")]
        public async Task<IActionResult> GetAllParentCategoriesWithBrands()
        {
            var body = await _categoryManager.GetAllParentCategoriesWithBrands(Language);
            var response = BuildResponse(body);
            return Ok(response);
        }
        [HttpPost("getAllChildrenCategoriesWithBrands")]
        public async Task<IActionResult> GetAllChildrenCategoriesWithBrands([FromBody]int parentId)
        {
            var body = await _categoryManager.GetAllChildrenCategoriesWithBrands(Language,parentId);
            var response = BuildResponse(body);
            return Ok(response);
        }
        [HttpPost("getCategoryWithBrands")]
        public async Task<IActionResult> GetCategoryWithBrands([FromBody ]int categoryId)
        {
            var body = await _categoryManager.GetCategoryWithBrands(categoryId, Language);
            var response = BuildResponse(body);
            return Ok(response);
        }
    }
}
