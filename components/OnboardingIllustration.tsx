import React from 'react';

const OnboardingIllustration = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simple representation of a person with a laptop */}
        <circle cx="120" cy="70" r="30" stroke="black" strokeWidth="2" fill="white"/>
        <path d="M90 140C90 120 100 105 120 105C140 105 150 120 150 140V160H90V140Z" stroke="black" strokeWidth="2" fill="white"/>
        <rect x="80" y="160" width="80" height="10" rx="2" stroke="black" strokeWidth="2" fill="black"/>
        <path d="M70 170L170 170L180 200L60 200L70 170Z" stroke="black" strokeWidth="2" fill="white"/>
        <circle cx="120" cy="185" r="3" fill="black"/>
        <path d="M100 80C100 80 110 85 120 85C130 85 140 80 140 80" stroke="black" strokeWidth="2"/>
        <path d="M110 65C110 65 115 60 120 60C125 60 130 65 130 65" stroke="black" strokeWidth="2"/>
      </svg>
    </div>
  );
};

export default OnboardingIllustration;
