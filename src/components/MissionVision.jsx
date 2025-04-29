import React from 'react';

const MissionVision = () => {
  return (
    <div id="mission-vision" className="relative mx-auto mt-32 max-w-4xl px-6 md:px-12">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#0a3b5b] mb-4">Mission Statement</h3>
          <p className="text-gray-600 leading-relaxed">
            At Abnaki, our mission is to empower individuals and organizations by providing innovative solutions 
            that drive efficiency, foster growth, and create lasting value. We are committed to excellence, 
            integrity, and collaboration in all our endeavors.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#0a3b5b] mb-4">Vision Statement</h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to be a global leader in delivering transformative services and technologies 
            that shape the future of industries and communities, setting new standards of success and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;