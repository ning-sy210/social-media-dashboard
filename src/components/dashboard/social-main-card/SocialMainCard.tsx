import { useContext } from "react";
import { ThemeContext } from "../../app/App";

import {
  formatCount,
  getChangeIcon,
  getPlatformIcon,
} from "../../../util/functions";
import "./SocialMainCard.scss";

type SocialMainCardType = {
  platform: string;
  username: string;
  followerCount: number;
  followerCountChange: number;
};

const SocialMainCard = ({
  platform,
  username,
  followerCount,
  followerCountChange,
}: SocialMainCardType) => {
  const theme = useContext(ThemeContext).theme;
  const countChangeTextClassname = followerCountChange >= 0 ? "rise" : "fall";

  return (
    <section className={`sm-main-card sm-main-card--theme-${theme} stack-hc`}>
      <div className={`top-border top-border--platform-${platform}`}></div>
      <section className="platform-handle vcsb">
        {getPlatformIcon(platform)}
        <p className="platform-handle__username h5 bold">@{username}</p>
      </section>

      <section className="follower-count-ctn stack-hc">
        <p className="follower-count-ctn__count h1 bold">
          {formatCount(followerCount)}
        </p>
        <p className="follower-count-ctn__label h4">followers</p>
      </section>

      <section
        className={`count-change-text count-change-text--${countChangeTextClassname} vc h5 bold`}
      >
        {getChangeIcon(followerCountChange)}
        <p>{Math.abs(followerCountChange)} Today</p>
      </section>
    </section>
  );
};

export default SocialMainCard;
