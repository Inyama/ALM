import React from 'react';
import { Sun, Moon, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DB } from '../services/db';

const DesktopNav = ({ darkMode, toggleDarkMode, onLogout }) => {
  const navigate = useNavigate();
  const currentUser = DB.getCurrentUser();

  const navItems = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Assumptions', path: '#' },
    { label: 'Pension Data', path: '#' },
    { label: 'Assets Input', path: '#' },
    { label: 'Summary', path: '#' }
  ];

  return (
    <header 
      className="sticky top-0 z-50 shadow-md transition-colors duration-300"
      style={{ background: darkMode ? 'linear-gradient(180deg, #1d3350 0%, #0f1f33 100%)' : 'linear-gradient(180deg, #2B4671 0%, #1D3350 100%)' }}
    >
      <div className="max-w-7x2 mx-auto px-6">
        <div className="flex items-center justify-between h-20">
    {/* Logo */}
        <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-300/50 to-transparent animate-pulse"></div>
            <span className="text-white font-bold text-xl relative z-10">A</span>
        </div>
        <div>
            {/* Keep text white for both modes */}
            <h1 className="text-xl font-bold text-white">
            Asset Liability Management
            </h1>
            <p className="text-xs text-gray-300">
            Professional Financial Solutions
            </p>
        </div>
        </div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-white hover:text-green-400 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* Welcome User */}
            <span className="text-white text-sm ml-4">
              Welcome, <strong>{currentUser}</strong>
            </span>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* User Profile */}
            <button
              className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
              aria-label="User profile"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle (You'll need to add this functionality) */}
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopNav;