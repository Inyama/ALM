import React from 'react';
import Carousel from '../components/Carousel';
import ActionCards from '../components/ActionCards';
import { TrendingUp, Database, FileInput, FileText, BarChart3, Play, ChevronRight, Calendar, Download } from 'lucide-react';
import InfoCard from '../components/InfoCard';
import GradientButton from '../components/GradientButton';

const Home = ({ darkMode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Carousel Section - Replaces 4 Cards */}
      <section className="mb-20">
        <Carousel darkMode={darkMode} />
      </section>

      {/* 6 Action Cards Section */}
      <section className="mb-20">
        <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Quick Actions
        </h2>
        <ActionCards darkMode={darkMode} />
      </section>

      {/* WHY ALM Section */}
      <section className="mb-20">
        <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
          Why Asset Liability Management
        </h2>
        <p className={`mb-8 max-w-4xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Asset Liability Management is essential for organizations managing long-term financial obligations. 
          By modeling the relationship between assets and liabilities under various market conditions, 
          ALM enables proactive risk management, regulatory compliance, and strategic decision-making.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`rounded-xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
              HOW ALM works
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              ALM works by linking asset cash flows to liability obligations under multiple scenarios. 
              It projects future balance sheet dynamics, identifies mismatches, and recommends rebalancing strategies. 
              Core steps: data ingestion → assumption setting → cashflow generation → scenario simulation → optimization & reporting.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="text-sm font-medium hover:underline transition-colors" style={{ color: 'var(--text-accent)' }}>
                Read more <ChevronRight className="inline w-4 h-4" />
              </a>
              <GradientButton className="text-sm py-2 px-4" ariaLabel="Run HOW ALM demo">
                <Play className="inline w-4 h-4 mr-1" /> Run demo
              </GradientButton>
            </div>
          </div>
          
          <div className={`rounded-xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
              Scenarios & Assets
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Scenario design tests a wide range: rising/falling interest rates, inflation shocks, prolonged low growth, 
              mass withdrawals, or mortality shifts. Asset classes covered: government bonds, corporate debt, equities, 
              real estate and alternatives. Each asset is modeled by yield curve impacts, liquidity assumptions, and correlation matrices.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="text-sm font-medium hover:underline transition-colors" style={{ color: 'var(--text-accent)' }}>
                Read more <ChevronRight className="inline w-4 h-4" />
              </a>
              <GradientButton className="text-sm py-2 px-4" ariaLabel="Run Scenarios demo">
                <Play className="inline w-4 h-4 mr-1" /> Run demo
              </GradientButton>
            </div>
          </div>
          
          <div className={`rounded-xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
              Governance & Why choose ALM
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Governance ensures model integrity: version control, validation, audit trails, and sign-off workflows. 
              ALM enables evidence-based decisions, demonstrating to boards and regulators that the organization monitors 
              long-term risk and meets fiduciary responsibilities.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="text-sm font-medium hover:underline transition-colors" style={{ color: 'var(--text-accent)' }}>
                Read more <ChevronRight className="inline w-4 h-4" />
              </a>
              <GradientButton className="text-sm py-2 px-4" ariaLabel="Run Governance demo">
                <Play className="inline w-4 h-4 mr-1" /> Run demo
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Analytics Dashboard */}
      <section className="mb-20">
        <div className={`rounded-xl p-8 shadow-lg border ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-blue-50 to-green-50 border-gray-100'
        }`}>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
            <div>
              <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
                Insights & Analytics Dashboard
              </h2>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Real-time monitoring and scenario analysis at your fingertips</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <Calendar className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                <select className={`text-sm border-none focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-transparent'}`} aria-label="Select date range">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last year</option>
                </select>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <TrendingUp className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                <select className={`text-sm border-none focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-transparent'}`} aria-label="Select scenario">
                  <option>Base scenario</option>
                  <option>Stress scenario</option>
                  <option>Optimistic scenario</option>
                </select>
              </div>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-white'
              }`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`rounded-lg p-6 shadow-sm hover:shadow-md transition-all group ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Funding Ratio</h3>
                <BarChart3 className="w-5 h-5 text-green-500" />
              </div>
              <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>102.4%</p>
              <p className="text-xs text-green-600 font-medium">+2.4% vs target</p>
              <div className={`mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Assets exceed liabilities by 2.4%, indicating healthy funding status.
              </div>
            </div>
            
            <div className={`rounded-lg p-6 shadow-sm hover:shadow-md transition-all group ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Liquidity Coverage</h3>
                <Database className="w-5 h-5 text-blue-500" />
              </div>
              <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>145%</p>
              <p className="text-xs text-blue-600 font-medium">Well above minimum</p>
              <div className={`mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Sufficient liquid assets to meet short-term obligations.
              </div>
            </div>
            
            <div className={`rounded-lg p-6 shadow-sm hover:shadow-md transition-all group ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projected Surplus</h3>
                <TrendingUp className="w-5 h-5 text-purple-500" />
              </div>
              <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>$4.2M</p>
              <p className="text-xs text-purple-600 font-medium">Next 12 months</p>
              <div className={`mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Expected positive cashflow based on current assumptions.
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <GradientButton ariaLabel="Open full dashboard">
              <BarChart3 className="inline w-5 h-5 mr-2" />
              Open Dashboard
            </GradientButton>
          </div>
        </div>
      </section>

      {/* 8 Info Cards Section */}
      <section className="mb-20">
        <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : ''}`} style={!darkMode ? { color: 'var(--text-accent)' } : {}}>
          Core Modules & Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          <InfoCard
            icon={TrendingUp}
            title="Assumptions"
            description="Define macroeconomic and demographic assumptions: interest rates, inflation, salary growth, mortality, and expense inflation. Save sets as named scenarios."
            buttonText="Manage Assumptions"
            darkMode={darkMode}
          />
          <InfoCard
            icon={Database}
            title="Pension Data"
            description="Upload and validate membership files, contribution histories, and benefit definitions. Auto-mapping and data quality reports included."
            buttonText="Upload Data"
            darkMode={darkMode}
          />
          <InfoCard
            icon={FileInput}
            title="Assets Input"
            description="Input holdings, market values, coupons, maturities and rebalancing rules. Supports bulk CSV uploads and live market links."
            buttonText="Edit Assets"
            darkMode={darkMode}
          />
          <InfoCard
            icon={BarChart3}
            title="Liabilities Cashflow"
            description="Projected liabilities by cohort and payment schedule. Model surrender/lapse and mortality to produce granular cashflow outputs."
            buttonText="View Cashflows"
            darkMode={darkMode}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <InfoCard
            icon={Play}
            title="Sandbox"
            description="Run what-if experiments with ad-hoc parameter changes to see immediate impacts without affecting production assumptions."
            buttonText="Open Sandbox"
            darkMode={darkMode}
          />
          <InfoCard
            icon={TrendingUp}
            title="Asset Cashflow Projections"
            description="Project coupon and principal receipts across scenarios. Output time-series suitable for duration and convexity analysis."
            buttonText="Project Cashflows"
            darkMode={darkMode}
          />
          <InfoCard
            icon={BarChart3}
            title="Cashflow Comparison"
            description="Compare multiple scenarios side-by-side: net cashflow, surplus/deficit, and funding ratios across dates."
            buttonText="Compare"
            darkMode={darkMode}
          />
          <InfoCard
            icon={FileText}
            title="Summary"
            description="Consolidated, board-ready summaries: executive highlights, key metrics, and downloadable PDF/Excel reports."
            buttonText="Generate Summary"
            darkMode={darkMode}
          />
        </div>
</section>
</div>
);
};


export default Home;