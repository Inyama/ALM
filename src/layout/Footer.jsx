import React from 'react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`mt-20 py-8 px-6 ${
      darkMode 
        ? 'bg-gray-800 border-t border-gray-700' 
        : 'bg-gradient-to-r from-blue-50/30 to-green-50/30'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <div>
              <span className={`font-bold ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>ALM</span>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Plan. Protect. Prosper.</p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm" aria-label="Footer navigation">
            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Home</a>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>·</span>
            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>·</span>
            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>·</span>
            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Privacy</a>
          </nav>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© {currentYear} ALM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;