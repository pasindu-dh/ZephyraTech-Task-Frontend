import React from 'react';

const Progress = ({ current = 0, total = 3 }) => {
  return (
    <div className="flex gap-2 w-full max-w-[200px] mx-auto py-6">
      {[...Array(total)].map((_, i) => (
        <div 
          key={i} 
          className={`h-1 flex-grow rounded-full transition-all duration-300 ${i === current ? 'bg-primary' : 'bg-guest'}`}
        />
      ))}
    </div>
  );
};

export default Progress;
