import React, { useState, useEffect } from 'react';
import Prj1 from '../assets/KBAcourse.png';
import Prj2 from '../assets/Leaveletter.png';
import Prj3 from '../assets/cookbook.jpeg';
import Prj4 from '../assets/CertiBlock.png';
import Prj5 from '../assets/ManualT.jpeg';
import Prj6 from '../assets/Portfolio.png';

function Projectss() {
  const [visible, setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, '_blank'); // Open the GitHub link in a new tab
  };

  const projects = [
    {
      id: 1,
      title: 'KBA Course App',
      image: Prj1,
      description: 'This project is a web application designed to showcase various blockchain-related courses.',
      github: 'https://github.com/Sneha-p1/Task1_KBA_Course_CSS',
      caption: 'A comprehensive platform for learning about blockchain technology.',
    },
    {
      id: 2,
      title: 'Leave Request Management Application',
      image: Prj2,
      description: 'Streamlining leave requests for employees and managers.',
      github: 'https://github.com/Sneha-p1/LeaveLetterManagementApp_Project',
      caption: 'Takeoff Tracker is a Leave letter management app designed specifically for managing employee leave letters.',
    },
    {
      id: 3,
      title: 'CookBook',
      image: Prj3,
      description: 'A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.',
      github: 'https://github.com/Neethu-Muthu/COOKBOOK_DOCKER',
      caption: 'A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.',
    },
    {
      id: 4,
      title: 'Certificate Dapp',
      image: Prj4,
      description: 'Certificate DApp is a decentralized application designed to generate and verify certificates with unique IDs. Built on blockchain technology, this application ensures the authenticity and immutability of certificates.',
      github: 'https://github.com/Sneha-p1/Certificate_DApp',
      caption: 'A comprehensive recipe book featuring a variety of delicious and easy-to-make dishes.',
    },
    
    {
      id: 5,
      title: 'ManualTesting',
      image: Prj5,
      description: 'This repository contains a collection of manual test cases designed to validate the key functionalities of the Projects.',
      github: 'https://github.com/Sneha-p1/ManualTesting',
      caption: 'It contains a collection of manual test cases designed to validate the key functionalities of the Projects.',
     
    },
    
    {
      id: 6,
      title: 'Portfolio Website',
      image: Prj6,
      description: 'My personal portfolio website showcasing my projects and skills.',
      github: 'https://github.com/Sneha-p1/React_MyPortfolio',
      caption: 'A personal portfolio website showcasing projects and skills.',
    },
  ];

  return (
    <div className="pb-5 h-auto my-20" id="projects">

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[30%] max-md:w-[49%] max-sm:w-full h-[250px] rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative cursor-pointer"
            onClick={() => handleProjectClick(project.github)}  // Open GitHub on click
            onMouseOver={() => handleHover(project.id)}
            onMouseLeave={() => setVisible(0)}
          >
            <img 
              className="w-full h-full object-cover"
              src={project.image}
              alt={project.title}
              style={{ objectFit: 'cover' }}
            />

            <div className={`${visible === project.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
              <div className="px-4 py-2">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">{project.title}</h1>
                <p className="text-sm text-white max-md:text-black">{project.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projectss;
