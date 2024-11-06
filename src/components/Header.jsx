import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeButton, setActiveButton] = useState('hireme');

  const activeButtonClasses =
    'border border-custom-blue text-indigo-700 py-2 px-4 dark:bg-white dark:text-custom-indigo-dark rounded transition';
  const inactiveButtonClasses =
    'text-gray-400 py-2 px-4 rounded hover:text-gray-800 dark:text-gray-500 transition';

  return (
    <header className="container flex justify-between items-center p-4 bg-white dark:bg-dark-purple mb-8">
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
          Skills
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
          Projects
        </a>
        <a
          to="/hireme"
          href="mailto:can.kurt764@gmail.com"
          className={
            activeButton === 'hireme'
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => setActiveButton('hireme')}
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
