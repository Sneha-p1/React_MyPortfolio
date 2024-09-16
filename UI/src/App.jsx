import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/AboutMe';
import Project from './Pages/Project';
import SayHello from './Components/SayHello';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certificate from './Pages/Certificate';
import Skills from './Components/Skills';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutMe />
              <Skills/>
              <Project />
              <Certificate/>
              <SayHello />
              <Footer />
            </>
          } />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

