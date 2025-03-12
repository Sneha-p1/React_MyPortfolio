import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-between bg-white dark:bg-black text-black dark:text-white py-20 px-10"
    >
      <div className="max-w-4xl w-full bg-white dark:bg-black mx-auto p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400 mb-6">
            About{" "}
            <span className="underline decoration-2 decoration-orange-600 dark:decoration-orange-500">
              me
            </span>
          </h2>
        </div>
        <div className="mt-6">
          <p className="text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-300">
            I am a passionate Full-Stack Developer specializing in the MERN
            stack, dedicated to building scalable, high-performance web
            applications. With a strong focus on design, optimization, and
            security, I strive to create user-friendly and maintainable
            solutions. My expertise includes React, Node.js, Express, and
            MongoDB, along with software testing and problem-solving. I have a
            strong interest in UI/UX design and enjoy creating website designs
            in Figma to enhance user experiences. Constantly driven by
            innovation, I thrive in dynamic development environments,
            collaborating with teams to bring creative ideas to life while
            continuously learning and improving my skills.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
