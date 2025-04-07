"use client";

import { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Provide the context to the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  // Apply theme to the <html> element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the context
export const useTheme = () => useContext(ThemeContext);
