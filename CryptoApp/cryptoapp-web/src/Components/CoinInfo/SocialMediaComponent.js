import React from 'react';

const SocialMediaComponent = ({ links }) => {
  return (
    <div className="social-media">
      <a href={links.homepage[0]}>Homepage</a>
      <a href={links.subreddit_url}>Reddit Page</a>
      <a href={links.repos_url.github[0]}>Github Page</a>
    </div>
  );
};

export default SocialMediaComponent;