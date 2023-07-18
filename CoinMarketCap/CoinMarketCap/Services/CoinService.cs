using CoinMarketCap.Models;
using Newtonsoft.Json;
using System.Net;

namespace CoinMarketCap.Services
{
    public class CoinService : ICoinService
    {
        private static string API_KEY = "4e3ed00a-d416-464b-ba35-cb5174fe890b";
        public async Task<Root> GetLatestInfo()
        {
            var URL = new UriBuilder("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");

            var client = new WebClient();

            client.Headers.Add("X-CMC_PRO_API_KEY", API_KEY);
            client.Headers.Add("Accepts", "application/json");

            var data = await client.DownloadStringTaskAsync(URL.ToString());

            return JsonConvert.DeserializeObject<Root>(data);
        }
    }
}
