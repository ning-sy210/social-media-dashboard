import { useContext } from "react";

import { ThemeContext } from "../../App/App";
import { getPlatformIcon } from "../Dashboard";
import { formatCount, getChangeIcon } from "../util/functions";

import "./DashboardSocialMainCard.scss";

type DashboardSocialMainCardType = {
  platform: string;
  username: string;
  followerCount: number;
  followerCountChange: number;
};

const DashboardSocialMainCard = ({
  platform,
  username,
  followerCount,
  followerCountChange,
}: DashboardSocialMainCardType) => {
  const theme = useContext(ThemeContext).theme;
  const countChangeTextClassname = followerCountChange >= 0 ? "rise" : "fall";

  return (
    <div className={`sm-main-card sm-main-card--theme-${theme} stack-hc`}>
      <div
        className={`gradient-top-border gradient-top-border--platform-${platform}`}
      ></div>
      <div className="platform-handle vcsb">
        {getPlatformIcon(platform)}
        <span className="h5 bold">@{username}</span>
      </div>

      <div className="follower-count-ctn stack-hc">
        <span className="follower-count-ctn__count h1 bold">
          {formatCount(followerCount)}
        </span>
        <span className="follower-count-ctn__label h4">followers</span>
      </div>

      <div
        className={`count-change-text count-change-text--${countChangeTextClassname} vc h5 bold`}
      >
        {getChangeIcon(followerCountChange)}
        <span>{Math.abs(followerCountChange)} Today</span>
      </div>
    </div>
  );
};

export default DashboardSocialMainCard;
