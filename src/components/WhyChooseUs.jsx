import React from 'react';

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="relative mx-auto mt-32 max-w-4xl px-6 md:px-12">
      <h3 className="text-3xl font-bold text-[#0a3b5b] md:text-4xl">
        Why Choose ABNAKI International
      </h3>
      <p className="mt-6 text-lg text-gray-600">
        With over a decade of experience in intellectual property protection, we offer unmatched expertise and personalized service to clients worldwide.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Feature 1 */}
        <div className="flex">
          <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Fast Turnaround</h4>
            <p className="text-gray-600">We understand the importance of time in intellectual property matters and provide expedited services without compromising quality.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex">
          <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Proven Success Rate</h4>
            <p className="text-gray-600">Our track record speaks for itself with a 95% success rate in trademark registrations across multiple jurisdictions.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex">
          <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-semibold text-[#0a3b5b]">Dedicated Team</h4>
            <p className="text-gray-600">Our specialized attorneys and paralegals work closely with you to understand your unique needs and provide tailored solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;