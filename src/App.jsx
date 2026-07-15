import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Login from "./components/Login/Login";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing toggleTheme={toggleTheme} isDark={isDark} />} />
        <Route path="/login" element={<Login />} />
      </Routes>@
    </Router>
  );
}

export default App;