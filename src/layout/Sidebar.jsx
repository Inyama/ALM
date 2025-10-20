import React, { useState } from 'react';
import { Home, Info, TrendingUp, Database, FileInput, FileText, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, darkMode }) => {
  const [activeItem, setActiveItem] = useState('Home');
  
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Info, label: 'About us' },
    { icon: TrendingUp, label: 'Assumptions' },
    { icon: Database, label: 'Pension Data' },
    { icon: FileInput, label: 'Assets Input' },
    { icon: FileText, label: 'Summary' }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-[84px] left-0 h-[calc(100vh-84px)] border-r transition-all duration-300 z-50 w-[250px] flex-shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
        aria-label="Main navigation"
      >
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto h-full">
          <ul className="space-y-2" role="list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      setActiveItem(item.label);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                      isActive 
                        ? 'text-white shadow-md' 
                        : darkMode 
                          ? 'text-gray-300 hover:bg-gray-700' 
                          : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={isActive ? { background: 'linear-gradient(90deg, #2DC35D 0%, #28B650 100%)' } : {}}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;