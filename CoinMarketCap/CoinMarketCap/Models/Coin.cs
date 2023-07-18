namespace CoinMarketCap.Models
{
    public class Coin
    {
        public int price { get; set; }
        public int volume_24h { get; set; }
        public int volume_change_24h { get; set; }
        public int percent_change_1h { get; set; }
        public int percent_change_24h { get; set; }
        public int percent_change_7d { get; set; }
        public int market_cap { get; set; }
        public int market_cap_dominance { get; set; }
        public double fully_diluted_market_cap { get; set; }
        public DateTime last_updated { get; set; }
    }
}
