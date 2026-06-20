import React from 'react';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img 
      src="/custom-logo.png" 
      alt="Avizakta Logo" 
      className={`object-contain ${className}`} 
    />
  );
};
