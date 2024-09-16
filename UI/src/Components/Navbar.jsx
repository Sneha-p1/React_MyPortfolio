import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
      });

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };




  const handleViewAndDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Sneha_P.pdf';
    link.setAttribute('download', 'Resume_Sneha_P.pdf');

    // Open the PDF in a new tab
    window.open(link.href, '_blank');

    // Automatically download the PDF after opening it
    link.click();
};



    return (
<>
    <nav className="flex justify-between items-center p-7 bg-white dark:bg-black text-black dark:text-white">
     <button
            onClick={handleViewAndDownloadCV}  
            className="text-md bg-transparent border border-black dark:border-white text-black dark:text-white py-2 px-4 rounded-lg">
            Download CV
        </button>
      <div className="flex space-x-7 text-md ml-[60%]">
        <a href="#about" className="hover:text-orange-400">About</a>
        <a href="#skills" className="hover:text-orange-400">Skills</a>
        <a href="#projects" className="hover:text-orange-400">Projects</a>
        <a href="#contact" className="hover:text-orange-400">Contact</a>
      </div>
      <button onClick={toggleDarkMode} className="w-10 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600 ml-3">
        {darkMode ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
      </button>
    </nav>
</>
  );
};

export default Navbar;
