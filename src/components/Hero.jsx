import React, { useState } from 'react';
import MyImage from '../assets/my-image.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  const [clickedButton, setClickedButton] = useState('hire');

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <section className="container flex items-center justify-between p-8 text-white mt-12">
      <div className="flex flex-col">
        <div className="flex items-center mb-2 mt-12">
          <div className="border-t-2 border-custom-blue w-32"></div>
          <h1 className="mx-4 text-xl font-regular text-indigo-700">
            Emre Can Kurt
          </h1>
        </div>
        <h2 className="text-8xl font-bold text-gray-800 mt-8 mb-12">
          Creative thinker, minimalism lover
        </h2>
        <p className="text-xl mb-6 text-gray-400 mb-8">
          Hi, I'm Emre Can Kurt. I'm a full-stack developer. If you are looking
          for a <br /> Developer who to craft solid and scalable frontend
          products with <br /> great use experiences. Let's shake hands with me.
        </p>
        <div className="flex space-x-4 mb-12">
          <a
            href="mailto:can.kurt764@gmail.com"
            onClick={() => handleButtonClick('hire')}
            className={`border border-custom-blue py-2 px-4 rounded transition ${
              clickedButton === 'hire'
                ? 'bg-custom-blue text-white'
                : 'text-indigo-700 hover:bg-custom-blue hover:text-white'
            }`}
          >
            Hire Me
          </a>
          <a
            href="https://github.com/kurtemrecan"
            target="_blank"
            onClick={() => handleButtonClick('github')}
            className={`flex items-center border border-custom-blue py-2 px-4 rounded transition ${
              clickedButton === 'github'
                ? 'bg-custom-blue text-white'
                : 'text-indigo-700 hover:bg-custom-blue hover:text-white'
            }`}
          >
            <GitHubIcon
              style={{
                color: clickedButton === 'github' ? 'white' : 'custom-blue',
              }}
              className="mr-2"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/emrecankurt"
            target="_blank"
            onClick={() => handleButtonClick('linkedin')}
            className={`flex items-center border border-custom-blue py-2 px-4 rounded transition ${
              clickedButton === 'linkedin'
                ? 'bg-custom-blue text-white'
                : 'text-indigo-700 hover:bg-custom-blue hover:text-white'
            }`}
          >
            <LinkedInIcon
              style={{
                color: clickedButton === 'linkedin' ? 'white' : 'custom-blue',
              }}
              className="mr-2"
            />
            LinkedIn
          </a>
        </div>
      </div>
      <img
        src={MyImage}
        alt="profile-photo"
        className="rounded-lg shadow-4xl"
      />
    </section>
  );
};

export default Hero;
