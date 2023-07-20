using CoinMarketCap.Models;
using CoinMarketCap.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Threading.Tasks;


namespace CoinMarketCap.Controllers
{
    [ApiController]

    [Route("api/coincontroller")]
    public class CoinController : ControllerBase
    {
        private readonly ICoinService _coinService;

        public CoinController(ICoinService coinService)
        {
            _coinService = coinService;
        }

        [HttpGet("latestinfo")]
        public async Task<IActionResult> GetLatestInfo()
        {
            var result = await _coinService.GetLatestInfo();

            return Ok(result);
        }

        [HttpGet("getcoin/{coinId}")]
        public async Task<IActionResult> GetCoin(int coinId)
        {
            var result = await _coinService.GetCoin(coinId);

            return Ok(result);
        }
    }
}
