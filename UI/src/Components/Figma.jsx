import React, { useState, useEffect } from 'react';
import Figma1 from '../assets/Leaveletter.png';
import Figma2 from '../assets/TodoList.png';
import Figma3 from '../assets/CarRental.png';

function Figma() {
  const [visible, setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
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

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  const figmaProjects = [
    {
      id: 1,
      title: 'Takeoff Tracker',
      image: Figma1,
      websiteView: 'https://www.figma.com/proto/Nqnd6N2z0hHz7xhZbs6gXJ/Untitled?node-id=5-41&p=f&t=luOeLOdkKSL1Fn3e-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A41',
      mobileView: 'https://www.figma.com/proto/3DLfBlc29lkAnVRdS4wDG9/Untitled?node-id=2-2&p=f&t=1Px57akMG5T2avNj-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1',
    },
    {
      id: 2,
      title: 'To-Do List',
      image: Figma2,
      mobileView: 'https://www.figma.com/proto/SzK2SCV4YttoDzWyZHvnWc/Untitled?t=z4gEEFEwQzGqP4g5-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2',
    },
    {
      id: 3,
      title: 'Car Rental website',
      image: Figma3,
      websiteView: 'https://www.figma.com/proto/LQQ4Axw7mvk6le4h4YThgT/Untitled?node-id=1-2&p=f&t=z4gEEFEwQzGqP4g5-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
    },
  ];

  return (
    <div className="pb-5 h-auto my-20">
      <h2 className="text-4xl text-center font-bold text-orange-500 dark:text-orange-400 mb-20">My Figma Creations</h2>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {figmaProjects.map((project) => (
          <div
            key={project.id}
            className="w-[30%] max-md:w-[49%] max-sm:w-full h-[250px] rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative cursor-pointer"
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
              <div className="px-4 py-2 text-center">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">{project.title}</h1>
                <div className="flex justify-center gap-2">
                  {project.websiteView && (
                    <button 
                      className="mt-2 px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
                      onClick={() => handleProjectClick(project.websiteView)}
                    >
                      Website View
                    </button>
                  )}
                  {project.mobileView && (
                    <button 
                      className="mt-2 px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
                      onClick={() => handleProjectClick(project.mobileView)}
                    >
                      Mobile View
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Figma;

