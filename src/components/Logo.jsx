import React from 'react';

const Logo = ({ className = "", isFooter = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background Circle */}
        <circle cx="32" cy="32" r="30" fill="url(#gradient1)" stroke="#1e40af" strokeWidth="2"/>
        
        {/* Letter A */}
        <path
          d="M20 45 L26 25 L30 25 L36 45 L32 45 L30.5 40 L25.5 40 L24 45 Z M26.5 36 L29.5 36 L28 31 Z"
          fill={isFooter ? "#ffffff" : "#1e40af"}
          fontWeight="bold"
        />
        
        {/* Letter E */}
        <path
          d="M38 25 L38 45 L50 45 L50 41 L42 41 L42 37 L48 37 L48 33 L42 33 L42 29 L50 29 L50 25 Z"
          fill={isFooter ? "#ffffff" : "#dc2626"}
        />
        
        {/* Tape Roll Design */}
        <circle cx="32" cy="18" r="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="28" y="16" width="8" height="4" fill="#f59e0b" rx="1"/>
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="50%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;