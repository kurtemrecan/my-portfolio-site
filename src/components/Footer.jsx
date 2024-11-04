import React from 'react';

export default function Footer() {
  return (
    <div className="footer bg-gray-100 p-12 dark:bg-dark-gray">
      <div className="container flex flex-col items-start">
        <div className="text-left">
          <p className="text-4xl font-regular dark:text-custom-gray mt-8 mb-12">
            Bir sonraki ürününüz üzerinde <br />
            birlikte çalışalım
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <p className="flex items-center">
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
              className="text-black dark:text-custom-indigo-lightest font-regular"
            >
              Personal Blog
            </a>
            <a href="#" className="text-custom-green">
              GitHub
            </a>
            <a href="#" className="text-custom-blue">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
