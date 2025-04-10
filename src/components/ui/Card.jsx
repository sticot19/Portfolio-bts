import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={`text-gray-700 ${className}`}>
    {children}
  </div>;
};

export const CardFooter = ({ children, className = '' }) => {
  return <div className={`mt-4 border-t pt-3 ${className}`}>
    {children}
  </div>;
};

export default Card;