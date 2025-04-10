import React from 'react';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'text-white bg-gray-700 text-gray-900 hover:bg-gray-900',
  outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
  ghost: 'text-gray-900 hover:bg-gray-100',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
};

export const Button = ({
  variant = 'primary',
  className = '',
  children,
  disabled = false,
  ...props
}) => {
  const baseStyle = 'px-4 py-2 rounded-md transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed';
  const finalClassName = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;