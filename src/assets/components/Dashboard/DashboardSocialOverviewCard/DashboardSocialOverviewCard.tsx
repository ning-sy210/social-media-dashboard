import { getPlatformIcon } from "../Dashboard";

export type DashboardSocialOverviewCardProps = {
  platform: string;
  metricLabel: string;
  currCount: number;
  percentageChange: number;
};

const DashboardSocialOverviewCard = ({
  platform,
  metricLabel,
  currCount,
  percentageChange,
}: DashboardSocialOverviewCardProps) => {
  return (
    <div className="sm-card stack">
      <div className="vcsb">
        <label>{metricLabel}</label>
        {getPlatformIcon(platform)}
      </div>
      <div className="count-change-text vcsb">
        <span>{currCount}</span>
        {percentageChange}
      </div>
    </div>
  );
};

export default DashboardSocialOverviewCard;
