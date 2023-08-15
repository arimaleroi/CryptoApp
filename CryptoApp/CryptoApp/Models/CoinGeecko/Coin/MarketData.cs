namespace CryptoApp.Models.CoinGeecko.Coin
{
    public class MarketData
    {
        public CurrentPrice? current_price { get; set; }
        public object? total_value_locked { get; set; }
        public object? mcap_to_tvl_ratio { get; set; }
        public object? fdv_to_tvl_ratio { get; set; }
        public object? roi { get; set; }
        public Ath? ath { get; set; }
        public AthChangePercentage? ath_change_percentage { get; set; }
        public AthDate? ath_date { get; set; }
        public Atl? atl { get; set; }
        public AtlChangePercentage? atl_change_percentage { get; set; }
        public AtlDate? atl_date { get; set; }
        public MarketCap? market_cap { get; set; }
        public int? market_cap_rank { get; set; }
        public FullyDilutedValuation? fully_diluted_valuation { get; set; }
        public TotalVolume? total_volume { get; set; }
        public High24h? high_24h { get; set; }
        public Low24h? low_24h { get; set; }
        public double price_change_24h { get; set; }
        public double price_change_percentage_24h { get; set; }
        public double price_change_percentage_7d { get; set; }
        public double price_change_percentage_14d { get; set; }
        public double price_change_percentage_30d { get; set; }
        public double price_change_percentage_60d { get; set; }
        public double price_change_percentage_200d { get; set; }
        public double price_change_percentage_1y { get; set; }
        public long market_cap_change_24h { get; set; }
        public double market_cap_change_percentage_24h { get; set; }
        public PriceChange24hInCurrency? price_change_24h_in_currency { get; set; }
        public PriceChangePercentage1hInCurrency? price_change_percentage_1h_in_currency { get; set; }
        public PriceChangePercentage24hInCurrency? price_change_percentage_24h_in_currency { get; set; }
        public PriceChangePercentage7dInCurrency? price_change_percentage_7d_in_currency { get; set; }
        public PriceChangePercentage14dInCurrency? price_change_percentage_14d_in_currency { get; set; }
        public PriceChangePercentage30dInCurrency? price_change_percentage_30d_in_currency { get; set; }
        public PriceChangePercentage60dInCurrency? price_change_percentage_60d_in_currency { get; set; }
        public PriceChangePercentage200dInCurrency? price_change_percentage_200d_in_currency { get; set; }
        public PriceChangePercentage1yInCurrency? price_change_percentage_1y_in_currency { get; set; }
        public MarketCapChange24hInCurrency? market_cap_change_24h_in_currency { get; set; }
        public MarketCapChangePercentage24hInCurrency? market_cap_change_percentage_24h_in_currency { get; set; }
        public double total_supply { get; set; }
        public double? max_supply { get; set; }
        public double circulating_supply { get; set; }
        public DateTime? last_updated { get; set; }
    }
}
