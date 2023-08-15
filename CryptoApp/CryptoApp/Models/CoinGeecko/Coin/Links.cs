namespace CryptoApp.Models.CoinGeecko.Coin
{
    public class Links
    {
        public List<string>? homepage { get; set; }
        public List<string>? blockchain_site { get; set; }
        public List<string>? official_forum_url { get; set; }
        public List<string>? chat_url { get; set; }
        public List<string>? announcement_url { get; set; }
        public string? twitter_screen_name { get; set; }
        public string? facebook_username { get; set; }
        public object? bitcointalk_thread_identifier { get; set; }
        public string? telegram_channel_identifier { get; set; }
        public string? subreddit_url { get; set; }
        public ReposUrl? repos_url { get; set; }
    }
}
