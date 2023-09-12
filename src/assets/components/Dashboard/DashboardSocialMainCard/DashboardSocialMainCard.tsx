import { useContext } from "react";
import { ThemeContext } from "../../App/App";

import DownIcon from "../../../images/icon-down.svg";
import UpIcon from "../../../images/icon-up.svg";

import { getPlatformIcon } from "../Dashboard";
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

  function getChangeIcon() {
    let imgSrc = "";
    let imgAlt = "";

    if (followerCountChange >= 0) {
      imgSrc = UpIcon;
      imgAlt = "Increase Icon";
    } else {
      imgSrc = DownIcon;
      imgAlt = "Decrease Icon";
    }

    return <img src={imgSrc} alt={imgAlt} />;
  }

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
        {getChangeIcon()}
        <span>{Math.abs(followerCountChange)} Today</span>
      </div>
    </div>
  );
};

function formatCount(count: number) {
  if (count < 10_000) {
    return `${count}`;
  }

  const MILLION = 1_000_000;
  const BILLION = 1_000_000_000;

  if (count >= BILLION) {
    return `${Math.floor(count / BILLION)}b`;
  }

  if (count >= MILLION) {
    return `${Math.floor(count / MILLION)}m`;
  }

  return `${Math.floor(count / 1_000)}k`;
}

export default DashboardSocialMainCard;
