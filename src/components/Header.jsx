import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [activeButton, setActiveButton] = useState('hireme');

  const { t } = useLanguage();

  const activeButtonClasses =
    'border border-custom-blue text-indigo-700 py-2 px-4 dark:bg-custom-indigo-lighetest dark:text-custom-indigo-dark rounded transition';
  const inactiveButtonClasses =
    'text-gray-400 py-2 px-4 rounded hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300 transition';

  return (
    <header className="container flex justify-between items-center p-4 bg-white dark:bg-dark-purple mb-8">
      <Avatar />
      <nav className="ml-auto space-x-4">
        <a
          href="#skills"
          to="/skills"
          className={
            activeButton === 'skills'
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => setActiveButton('skills')}
        >
          {t('skills')}
        </a>
        <a
          href="#projects"
          to="/projects"
          className={
            activeButton === 'projects'
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => setActiveButton('projects')}
        >
          {t('projects')}
        </a>
        <a
          to="/hireme"
          href="mailto:can.kurt764@gmail.com"
          className={`
            ${
              activeButton === 'hireme'
                ? activeButtonClasses
                : inactiveButtonClasses
            } dark:bg-custom-indigo-lightest dark:hover:bg-gray-600 dark:hover:text-black dark:hover:border-custom-indigo-lightest
          `}
          onClick={() => setActiveButton('hireme')}
        >
          {t('hireme')}
        </a>
      </nav>
    </header>
  );
}
