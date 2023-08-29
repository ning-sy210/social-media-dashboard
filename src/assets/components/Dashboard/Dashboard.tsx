import { useContext } from "react";
import { Theme, ThemeContext } from "../App/App";

import "./Dashboard.scss";

const Dashboard = () => {
  const theme = useContext(ThemeContext)?.theme;
  const toggleTheme = useContext(ThemeContext)?.toggleTheme;

  return (
    <main className="dashboard-content">
      <div className={`header-text header-text--${theme} vcsb`}>
        <div>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23,004</span>
        </div>
        <div className="theme-toggle vc">
          <label>Dark Mode</label>
          <input
            title="theme-toggle"
            type="checkbox"
            checked={theme === Theme.DARK}
            onClick={toggleTheme}
          ></input>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
