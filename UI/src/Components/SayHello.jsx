import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SayHello = () => {



  return (
    <footer className="flex flex-col items-center py-10 bg-white dark:bg-black text-black dark:text-white">
      <button
        id="contact"
        className="mb-6 px-6 py-3 border border-black dark:border-white rounded-lg text-black dark:text-white">
        Say hello!
    </button>
      <hr className="w-[60%] border-t border-gray-300 dark:border-gray-700 mb-6" />
      <div className="flex space-x-6">
        <a href="mailto:snehaparambadan@gmail.com" aria-label="Email Me">
          <FaEnvelope className="text-3xl" />
        </a>
        <a href="https://github.com/Sneha-p1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/sneha-parambadan-b1aaa5215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
    </footer>
  );
};

export default SayHello;
