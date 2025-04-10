import React from 'react';
import { createPortal } from 'react-dom';

export const Dialogue = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-4xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
        aria-label="Fermer"
      >
        &#10005;
      </button>
    </div>,
    document.body
  );
};

export const DialogueTitle = ({ children, className = '' }) => (
  <div className={`px-6 pt-6 text-xl font-semibold text-center mb-4 ${className}`}>{children}</div>
);

export const DialogueContent = ({ children, className = '' }) => (
  <div className={`text-gray-800 overflow-y-auto max-h-[60vh] pr-2 ${className}`}>{children}</div>
);

export const DialogueFooter = ({ children, className = '' }) => (
  <div className={`pb-6 pt-2 border-t ${className}`}>{children}</div>
);

export default Dialogue;
