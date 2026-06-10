import React, { useState } from 'react';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  icon: Icon, 
  type = 'text', 
  error, 
  className = '', 
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700 ml-1">{label}</label>}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-4 text-gray-400">
            <Icon size={18} />
          </div>
        )}
        <input
          type={inputType}
          className={`
            w-full py-3 rounded-full border border-gray-200 
            ${Icon ? 'pl-11' : 'pl-6'} 
            ${isPassword ? 'pr-12' : 'pr-6'}
            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
            transition-all duration-200 placeholder:text-gray-400 text-sm text-gray-900
          `}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <span className="text-xs text-red-500 ml-4">{error}</span>}
    </div>
  );
};

export default Input;
