import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div
      className={`
        bg-gray-800 border border-gray-700 rounded-lg p-6
        ${hoverable ? 'hover:border-purple-600 transition-colors duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
