namespace CryptoApp.Models.CoinGeecko.Coin
{
    public class DeveloperData
    {
        public int forks { get; set; }
        public int stars { get; set; }
        public int subscribers { get; set; }
        public int total_issues { get; set; }
        public int closed_issues { get; set; }
        public int pull_requests_merged { get; set; }
        public int pull_request_contributors { get; set; }
        public CodeAdditionsDeletions4Weeks code_additions_deletions_4_weeks { get; set; }
        public int commit_count_4_weeks { get; set; }
        public List<object> last_4_weeks_commit_activity_series { get; set; }
    }
}
