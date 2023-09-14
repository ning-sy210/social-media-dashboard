import { useContext } from "react";
import { Theme, ThemeContext } from "../../app/App";

import Toggle from "../../common/toggle/Toggle";
import "./DashboardHeader.scss";

const DashboardHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`header-text header-text--${theme} vcsb`}>
      <div className="stack" style={{ rowGap: "4px" }}>
        <h1 className="dashboard-heading h2 bold">Social Media Dashboard</h1>
        <p className="follower-count-text h4 bold">Total Followers: 23,004</p>
      </div>
      <div className="toggle-ctn vc" style={{ columnGap: "12px" }}>
        <label htmlFor="theme-toggle-btn" className="dark-mode-label h4 bold">
          Dark Mode
        </label>
        <Toggle
          id="theme-toggle-btn"
          classname={`theme-toggle-btn--theme-${theme}`}
          title="Toggle Theme"
          includeIcons={false}
          checked={theme === Theme.DARK}
          onChange={toggleTheme}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
