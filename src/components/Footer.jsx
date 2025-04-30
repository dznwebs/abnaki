import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 py-8">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold text-[#0a3b5b]">ABNAKI</h4>
            <p className="text-sm text-gray-500">Protecting intellectual property worldwide since 2015.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#0a3b5b]">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>IP Portfolio Management</li>
              <li>IP Monitoring</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#0a3b5b]">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 ABNAKI INTERNATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;