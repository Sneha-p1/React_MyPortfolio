import React from 'react';
import Footer from './Footer';
// import DarkModeToggle from './DarkModeToggle';


const MainComponent = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* <DarkModeToggle /> */}
      <main className="flex flex-col items-center justify-center h-full">
        <Footer />
      </main>
      <button className="fixed bottom-4 right-4 p-4 bg-orange-500 rounded-full text-white">
        <span className="sr-only">Back to top</span>
        ↑
      </button>
    </div>
  );
};

export default MainComponent;
