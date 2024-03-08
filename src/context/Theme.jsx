// import { createContext, useContext } from "react";

// export const ThemeContext = createContext({
//     themeMode : "light" | "dark",
// })

// export const ThemeProvider = ThemeContext.Provider;

// //hook
// export default function useTheme() {
//     return useContext(ThemeContext);
// }

// DarkModeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Update body background color based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#28282B';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};