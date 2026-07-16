import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate
import Landing from "./pages/Landing";
import Login from "./components/Login/Login";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing toggleTheme={toggleTheme} isDark={isDark} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;