import React from 'react';

const GradientButton = ({ children, onClick, className = "", ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ${className}`}
    style={{ background: 'var(--btn-grad)' }}
  >
    {children}
  </button>
);

export default GradientButton;