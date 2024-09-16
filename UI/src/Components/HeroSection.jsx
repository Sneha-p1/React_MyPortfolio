import React from 'react';
import HeroImage from '../assets/Heroimg.png';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 font-mono bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8 ">
        <div className="text-6xl font-bold ml-24">
          <span>Hi! My name is </span>
          <span className="text-orange-400">Sneha P</span> <br></br>
          {/* <span> and I am a web developer</span> */}
        </div>
        <div className='flex justify-center md:justify-start'>
          <img src={HeroImage} alt="Developer" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
