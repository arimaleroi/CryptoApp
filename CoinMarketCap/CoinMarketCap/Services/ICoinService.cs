using CoinMarketCap.Models.Listings;

namespace CoinMarketCap.Services
{
    public interface ICoinService
    {
        Task<Models.Listings.Root> GetLatestInfo();
        Task<Models.Quotes.Root> GetCoin(int coinId);
    }
}
