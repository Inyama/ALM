import React from 'react';
import { ChevronRight } from 'lucide-react';
import GradientButton from './GradientButton';

const ModalCard = ({ title, description, badge, darkMode }) => (
  <div className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-in ${
    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
  }`}>
    {badge && (
      <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-100 to-blue-50" style={{ color: 'var(--text-accent)' }}>
        {badge}
      </span>
    )}
    <h3 className="text-xl font-bold mb-3" style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
      {title}
    </h3>
    <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {description}
    </p>
    <div className="flex items-center gap-4">
      <GradientButton ariaLabel={`Open ${title}`}>Open</GradientButton>
      <a href="#" className="text-sm font-medium hover:underline transition-colors" style={{ color: 'var(--text-accent)' }}>
        Learn more <ChevronRight className="inline w-4 h-4" />
      </a>
    </div>
  </div>
);

export default ModalCard;