import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Building2, 
  Landmark, 
  Shield,
  Sun,
  Moon
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const businessCards = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Pension',
      description: 'Build sustainable retirement futures with innovative pension fund management. Integrate performance analytics, actuarial insights, and compliance-driven investment strategies to secure members\' futures. Optimize contribution tracking, automate fund allocation, and ensure long-term portfolio growth using AI-driven projections and ESG-compliant asset selection.',
      buttonText: 'Enter Pension Workspace',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      hoverGradient: 'hover:from-blue-600 hover:via-purple-600 hover:to-pink-600',
      action: () => navigate('/login')
    },
    {
      id: 2,
      icon: Building2,
      title: 'Capital Market Operator',
      description: 'Enable transparent and efficient market operations. Manage securities, track assets, automate settlements, and enhance regulatory compliance. Advanced data integration tools empower traders, portfolio managers, and brokers with real-time analytics and financial modeling for better capital allocation.',
      buttonText: 'Open Capital Market Operator',
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      hoverGradient: 'hover:from-green-600 hover:via-teal-600 hover:to-cyan-600',
      action: () => {}
    },
    {
      id: 3,
      icon: Landmark,
      title: 'Bank',
      description: 'Transform traditional banking with intelligent automation. Enable customer-centric solutions, advanced liquidity management, and robust asset-liability balancing. Leverage smart integration for credit risk analytics, digital onboarding, and real-time financial monitoring to enhance operational resilience.',
      buttonText: 'Open Bank Sector',
      gradient: 'from-orange-500 via-red-500 to-rose-500',
      hoverGradient: 'hover:from-orange-600 hover:via-red-600 hover:to-rose-600',
      action: () => {}
    },
    {
      id: 4,
      icon: Shield,
      title: 'Insurance',
      description: 'Deliver precision-driven insurance solutions with predictive modeling and policy lifecycle optimization. Streamline claims processing, underwriting, and reinsurance management while ensuring regulatory compliance and customer transparency. Integrate AI to improve pricing accuracy and risk mitigation strategies.',
      buttonText: 'Enter Insurance Sector',
      gradient: 'from-indigo-500 via-violet-500 to-purple-500',
      hoverGradient: 'hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600',
      action: () => {}
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-800/95' : 'bg-white/95'
      } backdrop-blur-sm shadow-lg`}>
        <div className="max-w-7x2 mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-300/50 to-transparent animate-pulse"></div>
                <span className="text-white font-bold text-xl relative z-10">A</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Asset Liability Management
                </h1>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Professional Financial Solutions
                </p>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-3 rounded-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
              style={{ background: 'linear-gradient(135deg, #2DC35D 0%, #28A84F 100%)' }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-white" />
              ) : (
                <Moon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Select Your Business
          </h2>
          <p className={`text-lg md:text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Choose your sector to access tailored financial management solutions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {businessCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative transition-all duration-700 ${
                  isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-xl flex flex-col`}>
                  {/* Gradient Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${card.gradient} ${card.hoverGradient} transition-all duration-500 flex items-center justify-center overflow-hidden`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transform rotate-12 scale-150"></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-20 h-20 text-white drop-shadow-2xl" strokeWidth={1.5} />
                    </div>

                    {/* Floating Circles Animation */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {card.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-6 flex-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {card.description}
                    </p>

                    {/* Button - Always at bottom */}
                    <button
                      onClick={card.action}
                      className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transform mt-auto"
                      style={{ background: 'linear-gradient(90deg, #2DC35D 0%, #28A84F 100%)' }}
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 ${
          isAnimated ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Need help choosing? {' '}
            <a href="#" className="text-green-500 hover:text-green-600 font-semibold hover:underline">
              Contact our team
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-20 py-8 ${
        darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'
      }`}>
        <div className="max-w-7x2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Asset Liability Management
              </span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} ALM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;