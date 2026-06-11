import React from 'react';
import Image from 'next/image';

const OnboardingIllustration = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Image 
        src="/success.png" 
        alt="Success Illustration" 
        width={400} 
        height={400} 
        className="w-full h-auto max-w-xs md:max-w-md object-contain" 
        priority 
      />
    </div>
  );
};

export default OnboardingIllustration;
