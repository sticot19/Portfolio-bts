import React from 'react';

export const Carousel = ({ children }) => (
  <div className="flex overflow-x-auto space-x-4">
    {children}
  </div>
);

export const CarouselItem = ({ children }) => (
  <div className="flex-shrink-0 w-80">{children}</div>
);
