import "./App.scss";

import { useState, createContext } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<null | ThemeContextType>(null);

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  function toggleTheme() {
    switch (theme) {
      case Theme.LIGHT:
        setTheme(Theme.DARK);
        break;

      case Theme.DARK:
        setTheme(Theme.LIGHT);
        break;

      default:
        break;
    }
  }

  return (
    <div className={`app app-bg--${theme}`}>
      <div className={`app-bg__top app-bg__top--${theme}`}></div>

      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
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
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
