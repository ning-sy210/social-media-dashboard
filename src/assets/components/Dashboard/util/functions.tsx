import UpIcon from "../../../images/icon-up.svg";
import DownIcon from "../../../images/icon-down.svg";

export function getChangeIcon(change: number) {
  let imgSrc = "";
  let imgAlt = "";

  if (change >= 0) {
    imgSrc = UpIcon;
    imgAlt = "Increase Icon";
  } else {
    imgSrc = DownIcon;
    imgAlt = "Decrease Icon";
  }

  return <img src={imgSrc} alt={imgAlt} />;
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
