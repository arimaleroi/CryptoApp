using CryptoApp.Models;
using CryptoApp.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Threading.Tasks;


namespace CryptoApp.Controllers
{
    [ApiController]

    [Route("api/[controller]")]
    public class CoinController : ControllerBase
    {
        private readonly ICoinService _coinService;

        public CoinController(ICoinService coinService)
        {
            _coinService = coinService;
        }

        [HttpGet("markets")]
        public async Task<IActionResult> GetMarketsAsync()
        {
            var result = await _coinService.GetMarkets();

            return Ok(result);
        }

        [HttpGet("coin")]
        public async Task<IActionResult> GetCoinAsync(string id)
        {
            var result = await _coinService.GetCoin(id);

            return Ok(result);
        }

        [HttpGet("marketchart")]
        public async Task<IActionResult> GetMarketChartAsync(string id, string days)
        {
            var result = await _coinService.GetMarketChart(id, days);

            return Ok(result);
        }
    }
}
