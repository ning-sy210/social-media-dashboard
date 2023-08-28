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

  return (
    <div className={`app app-bg--${theme}`}>
      <div className={`app-bg__top app-bg__top--${theme}`}></div>

      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <main></main>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
