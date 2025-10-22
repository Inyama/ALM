// ============================================
// IMPORTS
// ============================================
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DB } from './services/db';

// Pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

// Components
import DesktopNav from './components/DesktopNav';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

// Styles
import './styles/globals.css';


// ============================================
// LOGIN PAGE COMPONENT
// ============================================
const Login = () => {
  // State management for form
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '' 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if user exists in localStorage
    const user = DB.checkUser(formData.username, formData.password);
    
    if (user) {
      // User found - save current user and redirect to dashboard
      DB.setCurrentUser(user.username);
      window.location.href = '/dashboard';
    } else {
      // User not found - show error
      setError('Invalid credentials. Please sign up first.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        {/* Header with Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="text-3xl font-bold text-blue-600">
            Login to ALM
          </h1>
        </div>
        
        {/* Login Form */}
        <div className="space-y-4">
          
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
          />
          
          {/* Password Input with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #2DC35D 0%, #28A84F 100%)' }}
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


// ============================================
// SIGN UP PAGE COMPONENT
// ============================================
const SignUp = () => {
  // State management for form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle sign up submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation checks
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Check if username or email already exists
    const existingUsers = DB.getUsers();
    if (existingUsers.find(u => u.username === formData.username)) {
      setError('Username already exists');
      return;
    }

    // Save new user to localStorage
    DB.addUser({
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

    // Show success and redirect to login
    setSuccess(true);
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        {/* Header with Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="text-3xl font-bold text-green-600">
            Create Account
          </h1>
        </div>

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm mb-4">
            ✓ Account created! Redirecting to login...
          </div>
        )}
        
        {/* Sign Up Form */}
        <div className="space-y-4">
          
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-400 focus:outline-none"
          />
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-400 focus:outline-none"
          />
          
          {/* Password Input with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Confirm Password Input */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-400 focus:outline-none"
          />

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Create Account Button */}
          <button
            onClick={handleSubmit}
            disabled={success}
            className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 disabled:opacity-50"
            style={{ background: 'linear-gradient(90deg, #2DC35D 0%, #28A84F 100%)' }}
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


// ============================================
// PROTECTED ROUTE COMPONENT
// Used to protect routes that require authentication
// ============================================
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = DB.getCurrentUser();
  
  // If user is logged in, show the protected content
  // Otherwise, redirect to login page
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle logout
  const handleLogout = () => {
    DB.logout();
    window.location.href = '/';
  };

  // Detect screen size changes (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        
        {/* ========================================== */}
        {/* PUBLIC ROUTES (No authentication needed) */}
        {/* ========================================== */}
        
        {/* Landing Page - First page users see */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />
        
        
        {/* ========================================== */}
        {/* PROTECTED ROUTE (Requires authentication) */}
        {/* ========================================== */}
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                
                {/* ========================================== */}
                {/* MOBILE/TABLET LAYOUT (< 1024px)          */}
                {/* Uses Header + Sidebar                     */}
                {/* ========================================== */}
                {isMobile ? (
                  <>
                    {/* Mobile Header */}
                    <header 
                      className="fixed top-0 left-0 right-0 z-50 shadow-md"
                      style={{ 
                        background: 'linear-gradient(180deg, #2B4671 0%, #1D3350 100%)', 
                        height: '84px' 
                      }}
                    >
                      <div className="h-full flex items-center justify-between px-6">
                        
                        {/* Left: Hamburger Menu + Logo */}
                        <div className="flex items-center gap-4">
                          {/* Hamburger Menu Button */}
                          <button 
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                          </button>
                          
                          {/* Logo */}
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                              <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <h1 className="text-xl font-bold text-white">ALM</h1>
                          </div>
                        </div>
                        
                        {/* Right: Dark Mode Toggle */}
                        <button 
                          onClick={toggleDarkMode}
                          className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                          aria-label="Toggle dark mode"
                        >
                          {darkMode ? '☀️' : '🌙'}
                        </button>
                      </div>
                    </header>

                    {/* Main Layout with Sidebar */}
                    <div className="flex pt-[84px]">
                      {/* Sidebar (slides in from left on mobile) */}
                      <Sidebar 
                        isOpen={sidebarOpen} 
                        onClose={() => setSidebarOpen(false)}
                        darkMode={darkMode}
                      />
                      
                      {/* Main Content Area */}
                      <main className={`flex-1 overflow-x-hidden min-h-screen ${
                        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                      }`}>
                        <Home darkMode={darkMode} />
                        <Footer darkMode={darkMode} />
                      </main>
                    </div>
                  </>
                  
                ) : (
                  
                  /* ========================================== */
                  /* DESKTOP LAYOUT (≥ 1024px)                 */
                  /* Uses Top Navigation Bar (No Sidebar)      */
                  /* ========================================== */
                  <>
                    {/* Desktop Navigation Bar */}
                    <DesktopNav 
                      darkMode={darkMode}
                      toggleDarkMode={toggleDarkMode}
                      onLogout={handleLogout}
                    />
                    
                    {/* Main Content Area */}
                    <main className={`min-h-screen ${
                      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                    }`}>
                      <Home darkMode={darkMode} />
                      <Footer darkMode={darkMode} />
                    </main>
                  </>
                )}
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
