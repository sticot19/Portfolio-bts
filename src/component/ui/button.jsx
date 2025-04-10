import React from 'react';

export const Button = ({ children, className, variant }) => {
  const baseStyle = "px-4 py-2 rounded-lg focus:outline-none";
  const variantStyle = variant === "ghost" ? "text-gray-700 hover:text-blue-500" : "bg-blue-600 text-white";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
};