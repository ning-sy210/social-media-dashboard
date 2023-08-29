import { createContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

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

      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <Dashboard />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
