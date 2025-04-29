import React from 'react';
import homeImage from '../assets/home.avif';

const Hero = () => {
  return (
    <div id="hero" className="mx-auto mt-16 max-w-6xl px-6 md:mt-24 md:px-12">
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
        {/* Text Content - Left Half */}
        <div className="md:w-1/2 md:pr-8 md:text-left text-center">
          <h2 className="text-4xl font-bold leading-tight text-[#0a3b5b] md:text-5xl lg:text-6xl">
            Securing Your <br />
            <span className="text-blue-500">Intellectual Property</span> <br />
            With Precision
          </h2>
          <p className="mt-8 text-lg text-gray-600">
            We secure Intelectual Property. Since 2015, ABNAKI has directly protected innovative assets with expert precision and comprehensive global coverage.
          </p>
        </div>

        {/* Image - Right Half */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-r from-blue-100 to-blue-200 h-80 flex items-center justify-center">
              <div className="text-center p-4">
                <img src={homeImage} alt="Comprehensive IP Management" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;