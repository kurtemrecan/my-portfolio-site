import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function ModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useThemeContext();
  const { language, setLanguage } = useLanguage();
  console.log(language);

  return (
    <div className="container flex justify-end items-center space-x-2">
      <div className="flex">
        <button
          onClick={toggleDarkMode}
          className="relative flex items-center w-14 h-6 p-0.5 bg-custom-button-purple dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
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
          className={`text-m font-semibold ml-2 ${
            isDarkMode ? 'text-darkmode-button' : 'text-lightmode-button'
          }`}
        >
          {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </span>
      </div>
      <span
        className={`${
          isDarkMode ? 'text-darkmode-button' : 'text-lightmode-button'
        }`}
      >
        |
      </span>
      <div className="flex items-center">
        <span className="hidden md:block mx-2">|</span>
        {language === 'en' ? (
          <button
            onClick={() => setLanguage('tr')}
            className="text-s dark:text-white"
          >
            <span className="font-semibold text-custom-button-purple hover:underline">
              TÜRKÇE
            </span>
            'YE GEÇ
          </button>
        ) : (
          <button
            onClick={() => setLanguage('en')}
            className="text-s dark:text-white"
          >
            SWITCH TO
            <span className="font-semibold text-custom-button-purple hover:underline">
              {' '}
              ENGLISH
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
