import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeButton, setActiveButton] = useState('hireme');

  const activeButtonClasses =
    'border border-custom-blue text-custom-blue py-2 px-4 rounded transition';
  const inactiveButtonClasses =
    'text-gray-400 py-2 px-4 rounded hover:text-gray-800 transition';

  return (
    <header className="container flex justify-between items-center p-4 bg-white mb-8">
      <nav className="ml-auto space-x-4">
        <Link
          to="/skills"
          className={
            activeButton === 'skills'
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => setActiveButton('skills')}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={
            activeButton === 'projects'
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => setActiveButton('projects')}
        >
          Projects
        </Link>
        <Link
          to="/hireme"
          className={
            activeButton === 'hireme'
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => setActiveButton('hireme')}
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}
