import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Parallax.css";

export default function Thanks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts for animation
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      {/* Header placeholder to match site layout */}
      <div className="h-20 bg-white shadow-md"></div>
      
      <div className="relative mx-auto mt-32 mb-24 max-w-6xl px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0a3b5b] md:text-4xl text-center mb-12">
            Thank You For Your Message
          </h2>
          
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a3b5b] mb-4 text-center">Message Received</h3>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Your message has been received. We appreciate you contacting us and
                will respond as soon as possible.
              </p>
              
              <div className="flex justify-center">
                <Link
                  to="/"
                  className="inline-block py-3 px-6 bg-[#0a3b5b] text-white font-medium rounded-md transition-all hover:bg-blue-700 hover:scale-105"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}