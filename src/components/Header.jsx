import React, { useState } from 'react';

export default function Header() {
  const [activeButton, setActiveButton] = useState('hireme');

  const activeButtonClasses =
    'border border-custom-blue text-custom-blue py-2 px-4 rounded transition';
  const inactiveButtonClasses =
    'text-gray-400 py-2 px-4 rounded hover:text-gray-800 transition';

  return (
    <header className="container flex justify-between items-center p-4 bg-white mb-8 ">
      <nav className="ml-auto space-x-4">
        <a //link tagi kullan
          href="#skills"
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
          href="#hireme"
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
