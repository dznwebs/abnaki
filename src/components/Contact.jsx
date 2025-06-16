import React, { useEffect, useState } from 'react';
import womanWithIpadImage from '../assets/woman_with_ipad.png';
import ContactForm from './ContactForm';
import './Parallax.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
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
    <div id="contact" className="relative mx-auto mt-32 mb-24 max-w-6xl px-6 md:px-12">
      {/* CTA Section */}
      <div
        className={`overflow-hidden rounded-2xl bg-[#0a3b5b] shadow-xl transform transition-all duration-1000 mb-24 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Content - Left Half */}
          <div className="md:w-1/2 px-6 py-12 text-center md:text-left sm:px-8">
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Securing Your Innovative Assets
            </h3>
            <p className="mt-6 text-lg text-blue-100">
              Execute comprehensive IP protection strategies that safeguard your most valuable intellectual assets.
            </p>
            <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-[#0a3b5b] shadow-md transition-all hover:bg-gray-100 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Image - Right Half */}
          <div className="md:w-1/2 overflow-hidden">
            <div className="h-full transform transition-all duration-700 hover:scale-105">
              <img
                src={womanWithIpadImage}
                alt="Woman with iPad"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-[#0a3b5b] md:text-4xl text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
          >
            <div className="bg-white rounded-lg shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-[#0a3b5b] mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#0a3b5b]">Our Office</h4>
                    <p className="text-gray-600">
                      SAMUEL LEWIS AVE AND 58TH ST <br/>
                      ADR BLDG 13TH FL OBARRIO <br/>
                      PANAMA CITY 07815 PANAMA <br/>
                      PANAMA CITY</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#0a3b5b]">Email Us</h4>
                    <p className="text-gray-600">contact@abnakiinternational.com.pa</p>
                  </div>
                </div>


              </div>


            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;