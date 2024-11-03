import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-100 p-4 mt-16">
      <div className="container flex flex-col items-start">
        <div className="text-left">
          <p className="text-4xl font-regular mt-8 mb-12">
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
            <span className="text-red-600">can.kurt764@gmail.com</span>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-black font-semibold ">
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
