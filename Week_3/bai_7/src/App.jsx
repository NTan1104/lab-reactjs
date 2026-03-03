import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import Layout from './Layout'

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={appStyle}>
        <Layout />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
