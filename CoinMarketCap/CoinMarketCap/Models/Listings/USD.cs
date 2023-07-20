namespace CoinMarketCap.Models.Listings
{
    public class USD
    {
        public double price { get; set; }
        public object volume_24h { get; set; }
        public double volume_change_24h { get; set; }
        public double percent_change_1h { get; set; }
        public double percent_change_24h { get; set; }
        public double percent_change_7d { get; set; }
        public double market_cap { get; set; }
        public double market_cap_dominance { get; set; }
        public double fully_diluted_market_cap { get; set; }
        public DateTime last_updated { get; set; }
    }
}
