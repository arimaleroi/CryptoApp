namespace CryptoApp.Models.CoinGeecko.Coin
{
    public class Ticker
    {
        public string? @base { get; set; }
        public string? target { get; set; }
        public Market? market { get; set; }
        public double? last { get; set; }
        public double? volume { get; set; }
        public ConvertedLast? converted_last { get; set; }
        public ConvertedVolume? converted_volume { get; set; }
        public string? trust_score { get; set; }
        public double? bid_ask_spread_percentage { get; set; }
        public DateTime? timestamp { get; set; }
        public DateTime? last_traded_at { get; set; }
        public DateTime? last_fetch_at { get; set; }
        public bool? is_anomaly { get; set; }
        public bool? is_stale { get; set; }
        public string? trade_url { get; set; }
        public object? token_info_url { get; set; }
        public string? coin_id { get; set; }
        public string? target_coin_id { get; set; }
    }
}
