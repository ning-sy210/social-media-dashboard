import FacebookIcon from "../assets/images/icon-facebook.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import YoutubeIcon from "../assets/images/icon-youtube.svg";

import UpIcon from "../assets/images/icon-up.svg";
import DownIcon from "../assets/images/icon-down.svg";
import { SocialMedia } from "../assets/data";

export function getPlatformIcon(platform: string) {
  let imgSrc = "";
  let imgAlt = "";

  switch (platform) {
    case SocialMedia.FACEBOOK:
      imgSrc = FacebookIcon;
      imgAlt = "Facebook";
      break;

    case SocialMedia.TWITTER:
      imgSrc = TwitterIcon;
      imgAlt = "Twitter";
      break;

    case SocialMedia.INSTAGRAM:
      imgSrc = InstagramIcon;
      imgAlt = "Instagram";
      break;

    case SocialMedia.YOUTUBE:
      imgSrc = YoutubeIcon;
      imgAlt = "Youtube";
      break;

    default:
      return;
  }

  return <img src={imgSrc} alt={`${imgAlt} Icon`} />;
}

export function getChangeIcon(change: number) {
  let imgSrc = "";
  let imgAlt = "";

  if (change >= 0) {
    imgSrc = UpIcon;
    imgAlt = "Increase";
  } else {
    imgSrc = DownIcon;
    imgAlt = "Decrease";
  }

  return <img src={imgSrc} alt={`${imgAlt} Icon`} />;
}

export function formatCount(count: number) {
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
