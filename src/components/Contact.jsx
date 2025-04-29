import React from 'react';
import womanWithIpadImage from '../assets/woman_with_ipad.png';

const Contact = () => {
  return (
    <div id="contact" className="relative mx-auto mt-32 max-w-4xl px-6 md:px-12">
      <div className="overflow-hidden rounded-2xl bg-[#0a3b5b] shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Text Content - Left Half */}
          <div className="md:w-1/2 px-6 py-12 text-center md:text-left sm:px-8">
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Securing Your Innovative Assets
            </h3>
            <p className="mt-6 text-lg text-blue-100">
              Execute comprehensive IP protection strategies that safeguard your most valuable intellectual assets.
            </p>
            <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-[#0a3b5b] shadow-md transition-all hover:bg-gray-100">
              Get Started
            </button>
          </div>
          
          {/* Image - Right Half */}
          <div className="md:w-1/2">
            <div className="h-full">
              <img
                src={womanWithIpadImage}
                alt="Woman with iPad"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;