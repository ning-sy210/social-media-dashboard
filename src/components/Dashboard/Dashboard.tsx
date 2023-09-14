import { useContext } from "react";
import { Theme, ThemeContext } from "../app/App";

import "./Dashboard.scss";
import SocialMainCard from "../social-main-card/SocialMainCard";
import {
  SocialMedia,
  facebookData,
  instagramData,
  socialMediaData,
  twitterData,
  youtubeData,
} from "../../assets/data";
import SocialOverviewCard, {
  SocialOverviewCardProps,
} from "../social-overview-card/SocialOverviewCard";
import Toggle from "../common/toggle/Toggle";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const overviewCards: SocialOverviewCardProps[] = [
    {
      platform: SocialMedia.FACEBOOK,
      metricLabel: "Page Views",
      currCount: facebookData.pageViews.count,
      percentageChange: facebookData.pageViews.percentageChange,
    },
    {
      platform: SocialMedia.FACEBOOK,
      metricLabel: "Likes",
      currCount: facebookData.likes.count,
      percentageChange: facebookData.likes.percentageChange,
    },
    {
      platform: SocialMedia.INSTAGRAM,
      metricLabel: "Likes",
      currCount: instagramData.likes.count,
      percentageChange: instagramData.likes.percentageChange,
    },
    {
      platform: SocialMedia.INSTAGRAM,
      metricLabel: "Profile Views",
      currCount: instagramData.profileViews.count,
      percentageChange: instagramData.profileViews.percentageChange,
    },
    {
      platform: SocialMedia.TWITTER,
      metricLabel: "Retweets",
      currCount: twitterData.retweets.count,
      percentageChange: twitterData.retweets.percentageChange,
    },
    {
      platform: SocialMedia.TWITTER,
      metricLabel: "Likes",
      currCount: twitterData.likes.count,
      percentageChange: twitterData.likes.percentageChange,
    },
    {
      platform: SocialMedia.YOUTUBE,
      metricLabel: "Likes",
      currCount: youtubeData.likes.count,
      percentageChange: youtubeData.likes.percentageChange,
    },
    {
      platform: SocialMedia.YOUTUBE,
      metricLabel: "Total Views",
      currCount: youtubeData.totalViews.count,
      percentageChange: youtubeData.totalViews.percentageChange,
    },
  ];

  return (
    // update App.tsx if 'dashboard-content-ctn' classname is changed!
    <div className="dashboard-content-ctn stack-hc">
      <main className="dashboard-content stack">
        <div className={`header-text header-text--${theme} vcsb`}>
          <div className="stack" style={{ rowGap: "4px" }}>
            <h1 className="h2 bold">Social Media Dashboard</h1>
            <span className="follower-count-text h4 bold">
              Total Followers: 23,004
            </span>
          </div>
          <div className="toggle-ctn vc" style={{ columnGap: "12px" }}>
            <label
              htmlFor="theme-toggle-btn"
              className="dark-mode-label h4 bold"
            >
              Dark Mode
            </label>
            <Toggle
              id="theme-toggle-btn"
              classname={`theme-toggle-btn--theme-${theme}`}
              title="Toggle Theme"
              includeIcons={false}
              checked={theme === Theme.DARK}
              onChange={toggleTheme}
            />
          </div>
        </div>

        <div className="auto-grid auto-grid--main-card-ctn">
          {Object.entries(socialMediaData).map(([platform, accountInfo]) => (
            <SocialMainCard
              platform={platform}
              username={accountInfo.username}
              followerCount={accountInfo.followers.count}
              followerCountChange={accountInfo.followers.countChange}
            />
          ))}
        </div>

        <div className="overview-section stack">
          <h2 className={`overview-text--${theme} h3`}>Overview - Today</h2>
          <div className="auto-grid auto-grid--overview-card-ctn">
            {overviewCards.map((card) => (
              <SocialOverviewCard
                platform={card.platform}
                metricLabel={card.metricLabel}
                currCount={card.currCount}
                percentageChange={card.percentageChange}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;