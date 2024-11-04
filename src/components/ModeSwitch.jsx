import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <div className="container flex justify-end items-center space-x-2">
      <button
        onClick={toggleDarkMode}
        className="relative flex items-center w-14 h-6 p-0.5 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
      >
        {/* Toggle butonunun yuvarlak kısmı */}
        <span
          className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? 'translate-x-8' : 'translate-x-0'
          }`}
        ></span>
        {/* Mod ikonu */}
        <span
          className={`absolute ${
            isDarkMode ? 'left-1 text-white' : 'right-1 text-yellow-500'
          } transition-all duration-300 text-xs`}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </span>
      </button>
      {/* Mod Yazısı */}
      <span
        className={`text-m font-semibold ${
          isDarkMode ? 'text-darkmode-button' : 'text-lightmode-button'
        }`}
      >
        {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </div>
  );
}
