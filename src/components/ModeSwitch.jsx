import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

export default function ModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <div className="container flex justify-end">
      <button onClick={toggleDarkMode} className="p-2">
        {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </button>
    </div>
  );
}
