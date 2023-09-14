import { createContext, useState } from "react";
import Dashboard from "../dashboard/Dashboard";

import "./App.scss";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  // for adjusting height of app according to a `position: absolute` child
  const contentHeight = document.querySelector(
    ".dashboard-content-ctn"
  )?.scrollHeight;

  function toggleTheme() {
    return theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
  }

  return (
    <div
      className={`app-bg--theme-${theme}`}
      style={{
        position: "relative",
        height: `max(100dvh, ${contentHeight}px)`,
      }}
    >
      <div className="app-top-bg"></div>

      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <Dashboard />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
