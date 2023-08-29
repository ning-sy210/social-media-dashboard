import { useContext } from "react";
import { Theme, ThemeContext } from "../App/App";

import "./Dashboard.scss";
import DashboardSocialMainCard from "./DashboardSocialMainCard/DashboardSocialMainCard";
import { socialMediaData } from "../../data";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className="dashboard-content stack">
      <div className={`header-text header-text--${theme} vcsb`}>
        <div>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23,004</span>
        </div>
        <div className="theme-toggle vc">
          <label>Dark Mode</label>
          <input
            title="Toggle theme"
            type="checkbox"
            checked={theme === Theme.DARK}
            onClick={toggleTheme}
          ></input>
        </div>
      </div>

      <div className="flex-sb">
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
  );
};

export default Dashboard;
