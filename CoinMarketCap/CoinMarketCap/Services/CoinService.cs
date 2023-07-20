using CoinMarketCap.Models.Listings;
using CoinMarketCap.Models.Quotes;
using Newtonsoft.Json;
using System.Net;

namespace CoinMarketCap.Services
{
    public class CoinService : ICoinService
    {
        private static string API_KEY = "4e3ed00a-d416-464b-ba35-cb5174fe890b";
        public async Task<Models.Listings.Root> GetLatestInfo()
        {
            var URL = new UriBuilder("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");

            var client = new WebClient();

            client.Headers.Add("X-CMC_PRO_API_KEY", API_KEY);
            client.Headers.Add("Accepts", "application/json");

            var data = await client.DownloadStringTaskAsync(URL.ToString());

            return JsonConvert.DeserializeObject<Models.Listings.Root>(data);
        }

        public async Task<Models.Quotes.Root> GetCoin(int coinId)
        {
            var URL = new UriBuilder($"https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id={coinId}");

            var client = new WebClient();

            client.Headers.Add("X-CMC_PRO_API_KEY", API_KEY);
            client.Headers.Add("Accepts", "application/json");


            var data = await client.DownloadStringTaskAsync(URL.ToString());

            return JsonConvert.DeserializeObject<Models.Quotes.Root>(data);
        }
    }
}
