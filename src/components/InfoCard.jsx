import React from 'react';
import GradientButton from './GradientButton';

const InfoCard = ({ icon: Icon, title, description, buttonText, darkMode }) => (
  <div className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
  }`}>
    <div className="flex items-start gap-4 mb-4">
      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
        <Icon className="w-6 h-6" style={!darkMode ? { color: 'var(--text-accent)' } : { color: '#4ade80' }} />
      </div>
      <h3 className={`text-lg font-bold flex-1 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
        {title}
      </h3>
    </div>
    <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {description}
    </p>
    <div className="flex items-center gap-3">
      <GradientButton className="text-sm py-2 px-4" ariaLabel={buttonText}>{buttonText}</GradientButton>
      <a href="#" className="text-xs font-medium hover:underline" style={{ color: 'var(--text-accent)' }}>More</a>
    </div>
  </div>
);

export default InfoCard;