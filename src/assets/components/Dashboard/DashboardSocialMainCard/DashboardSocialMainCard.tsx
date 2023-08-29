import FacebookIcon from "../../../images/icon-facebook.svg";
import { SocialMedia } from "../../../data";

import InstagramIcon from "../../../images/icon-instagram.svg";
import TwitterIcon from "../../../images/icon-twitter.svg";
import YoutubeIcon from "../../../images/icon-youtube.svg";

import DownIcon from "../../../images/icon-down.svg";
import UpIcon from "../../../images/icon-up.svg";

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
  const countChangeTextClassname = followerCountChange >= 0 ? "rise" : "fall";

  function getPlatformIcon() {
    let imgSrc = "";
    let imgAlt = "";

    switch (platform) {
      case SocialMedia.FACEBOOK:
        imgSrc = FacebookIcon;
        imgAlt = "Facebook Icon";
        break;

      case SocialMedia.TWITTER:
        imgSrc = TwitterIcon;
        imgAlt = "Twitter Icon";
        break;

      case SocialMedia.INSTAGRAM:
        imgSrc = InstagramIcon;
        imgAlt = "Instagram Icon";
        break;

      case SocialMedia.YOUTUBE:
        imgSrc = YoutubeIcon;
        imgAlt = "Youtube Icon";
        break;

      default:
        return;
    }

    return <img src={imgSrc} alt={imgAlt} />;
  }

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
    <div
      className={`sm-card sm-card--main sm-card--main--${platform} stack-hcsb`}
    >
      <div className="platform-handle vcsb">
        {getPlatformIcon()}
        <span>@{username}</span>
      </div>

      <div className="follower-count-ctn stack-hc">
        <span className="follower-count-ctn__count">
          {formatCount(followerCount)}
        </span>
        <span className="follower-count-ctn__label">followers</span>
      </div>

      <div
        className={`count-change-text count-change-text--${countChangeTextClassname} vc`}
      >
        {getChangeIcon()}
        <span>{Math.abs(followerCountChange)}</span>
        <span>Today</span>
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
