import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, Shield, TrendingUp, Users, FileCheck } from 'react-icons/fi';
import { DB } from '../services/db';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = DB.checkUser(formData.username, formData.password);
    
    if (user) {
      DB.setCurrentUser(user.username);
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again or create an account.');
      setTimeout(() => navigate('/signup'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
        
        {/* Left Side - Illustration & Info */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <TrendingUp className="w-20 h-20 mb-6" style={{ animation: 'pulse 2s infinite' }} />
            <h2 className="text-4xl font-bold mb-4">Smart Pension Analytics</h2>
            <p className="text-lg opacity-90 mb-6">
              Real-time insights for fund managers, actuaries, and financial teams
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span>Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5" />
                <span>Regulatory compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span>Team collaboration tools</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Welcome Back to Smarter Pension Management
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Access your Pension Asset Liability Management dashboard to <strong>monitor fund performance, assess risks, and maintain balance between assets and obligations</strong> — anytime, anywhere.
            </p>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:outline-none transition-all"
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-green-400 focus:outline-none transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

      {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              style={{ background: 'linear-gradient(90deg, #2DC35D 0%, #28A84F 100%)' }}
            >
              Sign In
            </button>

            <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Your data is encrypted and protected by industry-grade security.
              </p>
            </div>

            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-green-600 hover:text-green-700 font-semibold hover:underline"
              >
                Sign up here
              </button>
            </p>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6 italic">
            "Empowering Pension Fund Growth Through Smart Analytics."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;