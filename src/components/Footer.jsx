import React from 'react';

export default function Footer() {
  return (
    <div className="footer bg-gray-100 p-12 dark:bg-dark-gray">
      <div className="container flex flex-col items-start">
        <div className="text-left">
          <p className="text-2xl sm:text-4xl font-regular dark:text-custom-gray mt-8 mb-12">
            Let's work together on <br /> your next product
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4">
          <p className="flex items-center mb-4 sm:mb-0">
            <span
              role="img"
              aria-label="right pointing finger"
              className="mr-2"
            >
              👉
            </span>
            <span className="text-red-600 dark:text-custom-purple">
              can.kurt764@gmail.com
            </span>
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-black dark:text-custom-indigo-lightest font-regular text-base sm:text-lg"
            >
              Personal Blog
            </a>
            <a href="#" className="text-custom-green text-base sm:text-lg">
              GitHub
            </a>
            <a href="#" className="text-custom-blue text-base sm:text-lg">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
