import React from 'react';
import {
  Briefcase,
  Calculator,
  Info,
  Package,
  Gift,
  Home as HomeIcon,
} from 'lucide-react';

const ActionCards = ({ darkMode }) => {
  const cards = [
    { id: 1, icon: Briefcase, label: 'Services', link: '#' },
    { id: 2, icon: Calculator, label: 'Pension Calculator', link: '#' },
    { id: 3, icon: Info, label: 'About Us', link: '#' },
    { id: 4, icon: Package, label: 'Retirement Pack', link: '#' },
    { id: 5, icon: Gift, label: 'Gratuity', link: '#' },
    { id: 6, icon: HomeIcon, label: 'Mortgage Loan', link: '#' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <a
            key={card.id}
            href={card.link}
            className={`group relative flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ${
              darkMode
                ? 'bg-gray-800 hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600'
                : 'bg-white hover:bg-gradient-to-br hover:from-green-400 hover:to-green-500'
            }`}
          >
            <Icon
              className={`w-12 h-12 mb-3 transition-colors duration-300 ${
                darkMode
                  ? 'text-green-400 group-hover:text-white'
                  : 'text-gray-700 group-hover:text-white'
              }`}
            />
            <span
              className={`text-sm font-semibold text-center transition-colors duration-300 ${
                darkMode
                  ? 'text-gray-200 group-hover:text-white'
                  : 'text-gray-800 group-hover:text-white'
              }`}
            >
              {card.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default ActionCards;
