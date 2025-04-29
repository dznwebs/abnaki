import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import BackgroundDecoration from './components/BackgroundDecoration';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        scrollToSection={scrollToSection} 
      />
      <Hero />
      <MissionVision />
      <BackgroundDecoration />
      <Services />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
