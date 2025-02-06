import React from 'react';

const Logo = ({ className = 'w-auto h-8' }) => {
  return (
    <div className={`${className} relative`}>
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-secondary-900">Prospé</span>
        <span className="text-primary-600">AI</span>
      </span>
    </div>
  );
};

export default Logo;