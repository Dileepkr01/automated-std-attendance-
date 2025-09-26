import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

export default Card;
