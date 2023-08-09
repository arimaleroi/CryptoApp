
using CryptoApp.Models.CoinGeecko.Coin;
using CryptoApp.Models.CoinGeecko.MarketChart;
using CryptoApp.Models.CoinGeecko.Markets;

namespace CryptoApp.Services
{
    public interface ICoinService
    {
        Task<List<MarketsCoin>> GetMarkets();

        Task<RootCoin> GetCoin(string id);

        Task<RootMarketChart> GetMarketChart(string id, string days);
    }
}
