import { useContext } from "react";
import { ThemeContext } from "../app/App";

import SocialMainCard from "./social-main-card/SocialMainCard";
import SocialOverviewCard, {
  SocialOverviewCardProps,
} from "./social-overview-card/SocialOverviewCard";
import DashboardHeader from "./dashboard-header/DashboardHeader";

import {
  SocialMedia,
  facebookData,
  instagramData,
  socialMediaData,
  twitterData,
  youtubeData,
} from "../../assets/data";
import "./Dashboard.scss";

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

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    // update App.tsx if 'dashboard-content-ctn' classname is changed!
    <div className="dashboard-content-ctn stack-hc">
      <main className="dashboard-content stack">
        <DashboardHeader />

        <section className="auto-grid auto-grid--main-card-ctn">
          {Object.entries(socialMediaData).map(([platform, accountInfo]) => (
            <SocialMainCard
              key={`${platform}-main`}
              platform={platform}
              username={accountInfo.username}
              followerCount={accountInfo.followers.count}
              followerCountChange={accountInfo.followers.countChange}
            />
          ))}
        </section>

        <section className="overview-section stack">
          <h2 className={`overview-text--${theme} h3`}>Overview - Today</h2>
          <section className="auto-grid auto-grid--overview-card-ctn">
            {overviewCards.map((card) => (
              <SocialOverviewCard
                key={`${card.platform}-overview--${card.metricLabel}`}
                platform={card.platform}
                metricLabel={card.metricLabel}
                currCount={card.currCount}
                percentageChange={card.percentageChange}
              />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
