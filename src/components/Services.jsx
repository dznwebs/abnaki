import React, { useEffect, useState, useRef } from 'react';
import publicImage from '../assets/public.avif';
import './Parallax.css';

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const serviceCardsRef = useRef([]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
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
    <div id="services" className="relative mx-auto mt-32 max-w-6xl px-6 md:px-12">
      <h3 className="text-3xl font-bold text-[#0a3b5b] md:text-4xl text-center mb-16">
        Protecting Intellectual Property with Precision
      </h3>

      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        {/* Image - Left Side */}
        <div 
          className={`md:w-2/5 mb-12 md:mb-0 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src={publicImage}
              alt="Intellectual Property Protection"
              className="w-full h-auto object-cover transition-all duration-700 hover:scale-105"
              style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}
            />
          </div>
        </div>
        
        {/* Services Section - Right Side */}
        <div className="md:w-3/5 grid gap-6 md:grid-cols-2">
          {/* Service Card 1 */}
          <div 
            ref={el => serviceCardsRef.current[0] = el}
            className={`rounded-lg bg-white p-6 shadow-md transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } hover:shadow-lg hover:-translate-y-1`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3 text-blue-500 floating-element">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Comprehensive IP Protection</h4>
          </div>

          {/* Service Card 2 */}
          <div 
            ref={el => serviceCardsRef.current[1] = el}
            className={`rounded-lg bg-white p-6 shadow-md transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } hover:shadow-lg hover:-translate-y-1`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3 text-blue-500 floating-element-slow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Global Strategy Coordination</h4>
          </div>

          {/* Service Card 3 */}
          <div 
            ref={el => serviceCardsRef.current[2] = el}
            className={`rounded-lg bg-white p-6 shadow-md transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } hover:shadow-lg hover:-translate-y-1`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3 text-blue-500 floating-element-fast">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Personalized Portfolio Management</h4>
          </div>
          
          {/* Service Card 4 */}
          <div 
            ref={el => serviceCardsRef.current[3] = el}
            className={`rounded-lg bg-white p-6 shadow-md transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } hover:shadow-lg hover:-translate-y-1`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3 text-blue-500 floating-element">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Confidentiality Assurance</h4>
          </div>
          
          {/* Service Card 5 */}
          <div 
            ref={el => serviceCardsRef.current[4] = el}
            className={`rounded-lg bg-white p-6 shadow-md transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } hover:shadow-lg hover:-translate-y-1`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3 text-blue-500 floating-element-slow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Excellence in Service Delivery</h4>
          </div>
          
          {/* Service Card 6 */}
          <div 
            ref={el => serviceCardsRef.current[5] = el}
            className={`rounded-lg bg-white p-6 shadow-md transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } hover:shadow-lg hover:-translate-y-1`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3 text-blue-500 floating-element-fast">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Expert Support</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;