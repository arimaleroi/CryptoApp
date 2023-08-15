namespace CryptoApp.Models.CoinGeecko.MarketChart
{
    public class RootMarketChart
    {
        public List<List<double>>? prices { get; set; }
        public List<List<double>>? market_caps { get; set; }
        public List<List<double>>? total_volumes { get; set; }
    }
}
