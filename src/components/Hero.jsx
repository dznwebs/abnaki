import React, { useEffect, useState } from 'react';
import homeImage from '../assets/home.avif';
import './Parallax.css';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="hero" className="parallax-hero">
      <div 
        className="parallax-hero-bg"
        style={{ 
          backgroundImage: `url(${homeImage})`,
          transform: `translateY(${offset * 0.5}px)`
        }}
      ></div>
      
      <div className="parallax-hero-content">
        <h2 className="text-4xl font-bold leading-tight text-[#0a3b5b] md:text-5xl lg:text-6xl">
          Securing Your <br />
          <span className="text-blue-500">Intellectual Property</span> <br />
          With Precision
        </h2>
        <p className="mt-8 text-lg text-gray-600">
          We secure Intellectual Property. Since 2015, ABNAKI has directly protected innovative assets with expert precision and comprehensive global coverage.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#0a3b5b]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;