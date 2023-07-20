using Newtonsoft.Json;

namespace CoinMarketCap.Models.Quotes
{
    public class Data
    {
        public int id { get; set; }
        public string name { get; set; }
        public string symbol { get; set; }
        public string slug { get; set; }
        public int is_active { get; set; }
        public int is_fiat { get; set; }
        public double? circulating_supply { get; set; }
        public double? total_supply { get; set; }
        public double? max_supply { get; set; }
        public DateTime date_added { get; set; }
        public int num_market_pairs { get; set; }
        public int cmc_rank { get; set; }
        public DateTime last_updated { get; set; }
        public List<Tag> tags { get; set; }
        public object platform { get; set; }
        public object self_reported_circulating_supply { get; set; }
        public object self_reported_market_cap { get; set; }
        public Quote quote { get; set; }
    }
}
