import React, { useState } from 'react';

function ThemeToggle({ onThemeChange }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    onThemeChange(!isDarkTheme);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isDarkTheme}
        onChange={toggleTheme}
        id="themeToggle"
      />
      <label htmlFor="themeToggle">Toggle Theme</label>
    </div>
  );
}

export default ThemeToggle;
