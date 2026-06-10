import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'apple' | 'guest' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = true, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-3 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    apple: "bg-apple text-primary hover:bg-opacity-90",
    guest: "bg-guest text-primary hover:bg-opacity-90",
    outline: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-600 hover:text-primary underline font-normal py-1 px-2",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
