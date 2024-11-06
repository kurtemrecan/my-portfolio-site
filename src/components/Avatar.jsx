import React from 'react';

const Avatar = () => {
  return (
    <div
      className={`
        w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16
        rounded-full 
        flex items-center justify-center 
        text-xs sm:text-lg font-semibold 
        bg-custom-indigo-lightest dark:bg-custom-indigo-dark
        text-[#3730A3] dark:text-custom-indigo-mid
        transition-colors duration-300
        overflow-hidden
      `}
    >
      <span className="transform rotate-12 translate-y-[-1px] translate-x-[-1px] inline-block">
        ECK
      </span>
    </div>
  );
};

export default Avatar;
