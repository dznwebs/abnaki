import React, { useEffect, useState, useRef } from 'react';
import managementImage from '../assets/management.webp';
import intStrategyImage from '../assets/int-strategy.avif';
import tailoredAdviceImage from '../assets/tailored-advice.avif';
import './Parallax.css';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const processSection = document.getElementById('process');
      if (processSection) {
        const rect = processSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="process" className="relative mx-auto mt-32 max-w-4xl px-6 md:px-12">
      <h3 className="text-3xl font-bold text-[#0a3b5b] md:text-4xl">
        Our IP Protection Process
      </h3>
      <p className="mt-6 text-lg text-gray-600">
        We've streamlined our process to make securing your intellectual property as efficient and hassle-free as possible.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className={`overflow-hidden rounded-lg bg-white shadow-md transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={managementImage} 
              alt="Comprehensive IP Management" 
              className="h-full w-full object-cover transition-all duration-700 hover:scale-110" 
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Comprehensive IP Management</h4>
            <p className="text-gray-600">Expert strategies for protecting IP</p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          ref={el => cardsRef.current[1] = el}
          className={`overflow-hidden rounded-lg bg-white shadow-md transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={intStrategyImage} 
              alt="International Strategy" 
              className="h-full w-full object-cover transition-all duration-700 hover:scale-110" 
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">International Strategy</h4>
            <p className="text-gray-600">Multi-jurisdictional protection of rights for secure global market expansion.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          ref={el => cardsRef.current[2] = el}
          className={`overflow-hidden rounded-lg bg-white shadow-md transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={tailoredAdviceImage} 
              alt="Tailored Advice" 
              className="h-full w-full object-cover transition-all duration-700 hover:scale-110" 
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Tailored Advice</h4>
            <p className="text-gray-600">Close and responsible guidance to navigate the complexities of IP management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;