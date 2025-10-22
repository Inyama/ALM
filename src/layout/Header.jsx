import React from 'react';
import { Menu, Sun, Moon, User, LogOut } from 'lucide-react';
import { DB } from '../services/db';

const Header = ({ onMenuClick, darkMode, toggleDarkMode, onLogout }) => {
  const currentUser = DB.getCurrentUser();

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{ background: 'linear-gradient(180deg, #2B4671 0%, #1D3350 100%)', height: '84px' }}
    >
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">ALM</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {currentUser && (
            <span className="hidden md:block text-white text-sm">
              Welcome, <strong>{currentUser}</strong>
            </span>
          )}
          <button 
            onClick={toggleDarkMode}
            className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="User profile"
          >
            <User className="w-5 h-5" />
          </button>
          <button 
            onClick={onLogout}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            aria-label="Logout"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;