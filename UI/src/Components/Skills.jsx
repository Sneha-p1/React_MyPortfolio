import React, { useState } from "react";
import javascriptlogo from '../assets/javascript-logo.svg';
import htmllogo from '../assets/html-5-logo.svg';
import csslogo from '../assets/css-3-logo.svg';
import reactjslogo from '../assets/reactjs-logo.svg';
import tailwindlogo from '../assets/tailwind-logo.svg';
import mongodblogo from '../assets/mongodb_logo.svg';
import expresslogo from '../assets/icons8-express-js.svg';
import nodejslogo from '../assets/nodejs-logo.svg';
import gitlogo from '../assets/git-logo.svg';
import githublogo from '../assets/github-logo.svg';
import linuxlogo from '../assets/linux-logo.svg';
import vscodelogo from '../assets/vs-code-logo.svg';
import MicrosoftOfficeLogo from '../assets/Microsoft_Office-Logo.wine.svg';


function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }
    return (
        <section  id="about" className="flex items-center justify-between bg-white dark:bg-black text-black dark:text-white py-20 px-10">
        
    <div className="pb-5 h-auto my-20" id="skills">

      <div className="text-center font-bold flex justify-between items-center ">
        <h1 className="text-5xl max-md:text-4xl font-bold text-orange-500 dark:text-orange-400 mb-4">Skills</h1>
        <div className="text-[#7e9199] text-4xl max-md:text-2xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10">

        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Languages</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("JavaScript")} onMouseLeave={() => handleLeave(null)}>
                <img src={javascriptlogo} alt="JavaScript" className="h-10" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("HTML")} onMouseLeave={() => handleLeave(null)}>
                    <img src={htmllogo} alt="HTML5" className="h-12" />
              </div> 

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("CSS")} onMouseLeave={() => handleLeave(null)}>
                    <img src={csslogo} alt="CSS3" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Libraries and Frameworks</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("React")} onMouseLeave={() => handleLeave(null)}>
                    <img src={reactjslogo} className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Tailwind")} onMouseLeave={() => handleLeave(null)}>
                    <img src={tailwindlogo} alt="Tailwind" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("MongoDB")} onMouseLeave={() => handleLeave(null)}>
                    <img src={mongodblogo} alt="MongoDB" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Express")} onMouseLeave={() => handleLeave(null)}>
                    <img src={expresslogo} alt="Express" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Node.js")} onMouseLeave={() => handleLeave(null)}>
                    <img src={nodejslogo} alt="Node.js" className="h-12" />
              </div>
            </div>
          </div>

          

        </div>

        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full ml-52">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Version Control</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Git")} onMouseLeave={() => handleLeave(null)}>
                    <img src={gitlogo} alt="Git" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Github")} onMouseLeave={() => handleLeave(null)}>
                    <img src={githublogo} alt="Github" className="h-12" />
              </div> 
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Other Tools & Services</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Linux")} onMouseLeave={() => handleLeave(null)}>
                    <img src={linuxlogo} alt="Linux" className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("Visual Studio Code")} onMouseLeave={() => handleLeave(null)}>
                    <img src={vscodelogo} className="h-12" />
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName("MS Office Suite")} onMouseLeave={() => handleLeave(null)}>
                    <img src={MicrosoftOfficeLogo} alt="MS Office Suite" className="h-12" />
              </div>
            </div>
          </div>

        </div>

      </div>
      
            </div>
            </section>
  );
}

export default Skills;