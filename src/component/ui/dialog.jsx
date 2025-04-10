
import React, { useState } from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6">
          {children}
        </div>
      </div>
    )
  );
};

export const DialogTrigger = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export const DialogContent = ({ children, title, className }) => (
  <div className={`fixed inset-0 bg-white p-6 rounded-lg max-w-2xl mx-auto z-50 ${className}`}>
    {/* Titre du Dialog pour l'accessibilité */}
    <h2 className="sr-only">{title}</h2> {/* La classe sr-only rend le titre invisible mais accessible aux lecteurs d'écran */}
    {children}
  </div>
);
