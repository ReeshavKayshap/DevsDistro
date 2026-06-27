import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    
    // Disable transitions temporarily during theme toggle
    document.documentElement.classList.add("no-transitions");
    
    document.documentElement.classList.toggle("dark", isDarkMode);
    
    // Force reflow to flush styles immediately
    void document.documentElement.offsetHeight;
    
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("no-transitions");
    }, 0);

    return () => clearTimeout(timer);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme: () => setIsDarkMode((d) => !d) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
