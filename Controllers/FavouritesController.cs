using Microsoft.AspNetCore.Authorization;
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
    public class FavouritesController: BaseController
    {
            
        IFavouritesManager _favouritesManager;

        public FavouritesController(IFavouritesManager favouritesManager)
        {
            _favouritesManager = favouritesManager;
        }

        [HttpPost("getUserFavouriteProducts")]

        public async Task<IActionResult> GetUserFavouriteProducts()
        {
            var res = await _favouritesManager.GetUserFavouriteProducts(Language);
            return Ok(res);
        }

        [HttpPost("addProductToFavourites")]

        public async Task<IActionResult> AddProductToFavourites([FromBody]int productId)
        {
            await _favouritesManager.AddProductToFavourites(productId);
            return Ok();
        }
    }
}
