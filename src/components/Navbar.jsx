import React from 'react';

const Navbar = ({ isMenuOpen, toggleMenu, scrollToSection }) => {
  return (
    <nav className="relative flex items-center justify-between px-6 py-4 md:px-12">
      <div className="flex items-center">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200 bg-white">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-2 text-[#0a3b5b]">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="6" />
            <path d="M50,15 a35,35 0 0,1 0,70 a35,35 0 0,1 0,-70" fill="none" stroke="currentColor" strokeWidth="6" />
            <path d="M15,50 h70" stroke="currentColor" strokeWidth="6" />
            <path d="M50,15 v70" stroke="currentColor" strokeWidth="6" />
          </svg>
        </div>
        <div className="ml-4 text-left">
          <h1 className="text-2xl font-bold text-[#0a3b5b]">ABNAKI</h1>
          <p className="text-sm uppercase tracking-wider text-[#0a3b5b]">INTERNATIONAL</p>
        </div>
      </div>
      <button
        className="text-[#0a3b5b] z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <div className="flex h-full flex-col items-center justify-center space-y-8 text-center">
            <button
              className="text-xl font-semibold text-[#0a3b5b] hover:text-blue-500"
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
            <button
              className="text-xl font-semibold text-[#0a3b5b] hover:text-blue-500"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button
              className="text-xl font-semibold text-[#0a3b5b] hover:text-blue-500"
              onClick={() => scrollToSection('why-choose-us')}
            >
              Why Choose Us
            </button>
            <button
              className="text-xl font-semibold text-[#0a3b5b] hover:text-blue-500"
              onClick={() => scrollToSection('process')}
            >
              Our Process
            </button>
            <button
              className="text-xl font-semibold text-[#0a3b5b] hover:text-blue-500"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;