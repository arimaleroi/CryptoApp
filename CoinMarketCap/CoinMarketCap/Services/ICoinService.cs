using CoinMarketCap.Models;

namespace CoinMarketCap.Services
{
    public interface ICoinService
    {
        Task<Root> GetLatestInfo();
    }
}
