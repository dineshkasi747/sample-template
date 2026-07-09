'use client';

import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(null);

  const buttons = [
    {
      id: 'call',
      icon: FaPhoneAlt,
      href: 'tel:+919515236524',
      label: 'Call Us',
      bgColor: '#DC2626',
      hoverColor: '#b91c1c',
      shadow: '0 4px 20px rgba(220, 38, 38, 0.4)',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-4">
      {buttons.map((btn) => (
        <div key={btn.id} className="relative flex items-center group">
          {/* Tooltip */}
          <div 
            className={`absolute right-full mr-3 px-3 py-1.5 rounded-lg text-white text-sm font-medium whitespace-nowrap transition-all duration-300 pointer-events-none ${showTooltip === btn.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
            style={{ backgroundColor: btn.bgColor }}
          >
            {btn.label}
            <div 
              className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45"
              style={{ backgroundColor: btn.bgColor }}
            />
          </div>
          
          {/* Button */}
          <a
            href={btn.href}
            target={btn.id === 'whatsapp' ? '_blank' : '_self'}
            rel={btn.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ 
              backgroundColor: btn.bgColor,
              boxShadow: btn.shadow,
            }}
            onMouseEnter={() => setShowTooltip(btn.id)}
            onMouseLeave={() => setShowTooltip(null)}
            aria-label={btn.label}
          >
            <btn.icon size={24} />
          </a>
          
          {/* Pulse ring animation */}
          <span 
            className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
            style={{ backgroundColor: btn.bgColor }}
          />
        </div>
      ))}
    </div>
  );
}
