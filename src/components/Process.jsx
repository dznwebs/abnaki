import React from 'react';

const Process = () => {
  return (
    <div id="process" className="relative mx-auto mt-32 max-w-4xl px-6 md:px-12">
      <h3 className="text-3xl font-bold text-[#0a3b5b] md:text-4xl">
        Our Trademark Protection Process
      </h3>
      <p className="mt-6 text-lg text-gray-600">
        We've streamlined our process to make securing your intellectual property as efficient and hassle-free as possible.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
          <div className="h-48 overflow-hidden">
            <img src="src/assets/management.webp" alt="Comprehensive IP Management" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Comprehensive IP Management</h4>
            <p className="text-gray-600">Expert strategies for protecting IP</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
          <div className="h-48 overflow-hidden">
            <img src="src/assets/int-strategy.avif" alt="International Strategy" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">International Strategy</h4>
            <p className="text-gray-600">Multi-jurisdictional protection of rights for secure global market expansion.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
          <div className="h-48 overflow-hidden">
            <img src="src/assets/tailored-advice.avif" alt="Tailored Advice" className="h-full w-full object-cover" />
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