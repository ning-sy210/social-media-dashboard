import { useContext } from "react";
import { ThemeContext } from "../../app/App";

import {
  formatCount,
  getChangeIcon,
  getPlatformIcon,
} from "../../../util/functions";
import "./SocialOverviewCard.scss";

export type SocialOverviewCardProps = {
  platform: string;
  metricLabel: string;
  currCount: number;
  percentageChange: number;
};

const SocialOverviewCard = ({
  platform,
  metricLabel,
  currCount,
  percentageChange,
}: SocialOverviewCardProps) => {
  const theme = useContext(ThemeContext).theme;
  const percentageChangeTextClassname = percentageChange >= 0 ? "rise" : "fall";

  return (
    <section className={`sm-overview-card sm-overview-card--theme-${theme} stack`}>
      <section className="heading-row vcsb">
        <p className="metric-label h5 bold">{metricLabel}</p>
        {getPlatformIcon(platform)}
      </section>

      <section className="aesb bold">
        <p className="h3">{formatCount(currCount)}</p>
        <div
          className={`percentage-change-text--${percentageChangeTextClassname} vcsb`}
          style={{ columnGap: "4px" }}
        >
          {getChangeIcon(percentageChange)}
          <p className="h5">{Math.abs(percentageChange)}%</p>
        </div>
      </section>
    </section>
  );
};

export default SocialOverviewCard;
