import React from 'react';

const Divider = () => {
  return (
    <div className="relative flex items-center py-4 w-full max-w-sm mx-auto">
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default Divider;
