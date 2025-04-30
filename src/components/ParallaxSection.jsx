import React from 'react';
import './Parallax.css';

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  overlayColor = 'rgba(10, 59, 91, 0.7)',
  minHeight = '500px'
}) => {
  return (
    <div 
      className="parallax-scroll" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        minHeight
      }}
    >
      <div 
        className="parallax-overlay"
        style={{ backgroundColor: overlayColor }}
      ></div>
      <div className="parallax-text">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;