using CoinMarketCap.Models.Listings;

namespace CoinMarketCap.Models.Quotes
{
    public class Root
    {
        public Dictionary<string, Data> data { get; set; }
        public Status status { get; set; }
    }
}
