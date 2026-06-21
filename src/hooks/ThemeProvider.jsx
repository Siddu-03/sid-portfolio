import { useEffect, useState, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import { siteConfig } from "@/data/siteConfig";

function getInitialTheme() {
  const fallback = siteConfig.defaultTheme === "light" ? "light" : "dark";
  if (typeof window === "undefined") return fallback;
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return fallback;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
