﻿namespace CryptoApp.Models.CoinGeecko.Coin
{
    public class RootCoin
    {
        public string? id { get; set; }
        public string? symbol { get; set; }
        public string? name { get; set; }
        public object? asset_platform_id { get; set; }
        public int? block_time_in_minutes { get; set; }
        public string? hashing_algorithm { get; set; }
        public List<string>? categories { get; set; }
        public object? public_notice { get; set; }
        public List<object>? additional_notices { get; set; }
        public Description? description { get; set; }
        public Links? links { get; set; }
        public Image? image { get; set; }
        public string? country_origin { get; set; }
        public string? genesis_date { get; set; }
        public double? sentiment_votes_up_percentage { get; set; }
        public double? sentiment_votes_down_percentage { get; set; }
        public int? watchlist_portfolio_users { get; set; }
        public int? market_cap_rank { get; set; }
        public int? coingecko_rank { get; set; }
        public double? coingecko_score { get; set; }
        public double? developer_score { get; set; }
        public double? community_score { get; set; }
        public double? liquidity_score { get; set; }
        public double? public_interest_score { get; set; }
        public MarketData? market_data { get; set; }
        public List<object>? status_updates { get; set; }
        public DateTime? last_updated { get; set; }
        public List<Ticker>? tickers { get; set; }
    }
}
