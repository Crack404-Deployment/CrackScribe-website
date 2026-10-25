import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    primary: "bg-gradient-to-r from-white to-gray-300 text-black hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};