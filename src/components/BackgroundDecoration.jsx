import React from 'react';

const BackgroundDecoration = () => {
  return (
    <>
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
    </>
  );
};

export default BackgroundDecoration;