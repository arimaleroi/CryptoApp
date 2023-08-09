using CryptoApp.Models.CoinGeecko;
using CryptoApp.Models.CoinGeecko.Coin;
using CryptoApp.Models.CoinGeecko.MarketChart;
using CryptoApp.Models.CoinGeecko.Markets;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;

namespace CryptoApp.Services
{
    public class CoinService : ICoinService
    {
        private static readonly HttpClient httpClient = new HttpClient();
        public async Task<List<MarketsCoin>> GetMarkets()
        {

            var url = new Uri("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
            httpClient.DefaultRequestHeaders.Add("User-Agent", "Other");

            var response = await httpClient.GetAsync(url);

            var jsonString = await response.Content.ReadAsStringAsync();
            var coinData = JsonConvert.DeserializeObject<List<MarketsCoin>>(jsonString);
            return coinData;
        }

        public async Task<RootCoin> GetCoin(string id)
        {
            var url = new Uri($"https://api.coingecko.com/api/v3/coins/{id}?localization=false");
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
            httpClient.DefaultRequestHeaders.Add("User-Agent", "Other");

            var response = await httpClient.GetAsync(url);

            var jsonString = await response.Content.ReadAsStringAsync();
            var coinData = JsonConvert.DeserializeObject<RootCoin>(jsonString);
            return coinData;
        }

        public async Task<RootMarketChart> GetMarketChart(string id, string days)
        {
            var url = new Uri($"https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency=usd&days={days}");
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
            httpClient.DefaultRequestHeaders.Add("User-Agent", "Other");

            var response = await httpClient.GetAsync(url);

            var jsonString = await response.Content.ReadAsStringAsync();
            var coinData = JsonConvert.DeserializeObject<RootMarketChart>(jsonString);
            return coinData;
        }
    }
}
