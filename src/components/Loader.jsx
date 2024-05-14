import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-l-8 border-r-4 border-t-4 border-b-4 border-blue-950 w-16 h-16"></div>
    </div>
  );
};

export default Loader;
