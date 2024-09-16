import React from 'react';

const AboutMe = () => {
  return (
    <section  id="about" className="flex items-center justify-between bg-white dark:bg-black text-black dark:text-white py-20 px-10">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-4">
          About <span className="underline">me</span>
        </h2>
      </div>
      <div className="w-1/2">
        <p className="text-lg">
        I specialize in the MERN stack and software testing, excelling at creating seamless, visually engaging web experiences. With a strong foundation in web technologies, a keen eye for detail in testing, and a passion for problem-solving, I turn creative ideas into functional, user-friendly, and reliable websites. </p>
      </div>
    </section>
  );
};

export default AboutMe;
