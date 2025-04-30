import React, { useEffect, useState } from 'react';
import './Parallax.css';

const ParallaxBackground = ({ children, className, speed = 0.5 }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`parallax-container ${className}`}>
      <div 
        className="parallax-background"
        style={{ transform: `translateY(${scrollPosition * speed}px)` }}
      ></div>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;