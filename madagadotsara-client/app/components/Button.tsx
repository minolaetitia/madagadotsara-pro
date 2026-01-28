import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 flex items-center justify-center whitespace-nowrap';

  const variantStyles: Record<string, string> = {
    primary: `bg-purple-600 hover:bg-purple-700 text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    secondary: `bg-gray-700 hover:bg-gray-600 text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    outline: `border border-purple-600 text-purple-400 hover:bg-purple-600/10 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    ghost: `text-gray-300 hover:text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
  };

  const sizeStyles: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
