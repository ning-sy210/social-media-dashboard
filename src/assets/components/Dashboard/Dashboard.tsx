import { useContext } from "react";
import { Theme, ThemeContext } from "../App/App";

import "./Dashboard.scss";
import DashboardSocialMainCard from "./DashboardSocialMainCard/DashboardSocialMainCard";
import { socialMediaData } from "../../data";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dashboard-content-ctn stack-hc">
      <main className="dashboard-content stack">
        <div className={`header-text header-text--${theme} vcsb`}>
          <div>
            <h1 className="h2">Social Media Dashboard</h1>
            <span className="h4">Total Followers: 23,004</span>
          </div>
          <div className="theme-toggle vc">
            <label className="h4">Dark Mode</label>
            <input
              title="Toggle theme"
              type="checkbox"
              checked={theme === Theme.DARK}
              onClick={toggleTheme}
            ></input>
          </div>
        </div>

        <div className="auto-grid" style={{ gap: "16px 32px" }}>
          {Object.entries(socialMediaData).map(([platform, accountInfo]) => (
            <DashboardSocialMainCard
              platform={platform}
              username={accountInfo.username}
              followerCount={accountInfo.followers.count}
              followerCountChange={accountInfo.followers.countChange}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
