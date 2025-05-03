import React from 'react';
import CurrencyConverter from '../components/converter/CurrencyConverter';
import ExchangeRateTable from '../components/converter/ExchangeRateTable';
import { ArrowUpRight, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Currency Conversion <span className="text-primary-500">Made Simple</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get real-time exchange rates for global currencies with our fast and accurate currency converter.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 transition-transform hover:shadow-xl">
            <CurrencyConverter />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Popular Exchange Rates</h2>
            <ExchangeRateTable />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Zap className="text-primary-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700">Real-time exchange rates from trusted sources</span>
              </li>
              <li className="flex items-start">
                <Zap className="text-primary-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700">Support for 170+ global currencies</span>
              </li>
              <li className="flex items-start">
                <Zap className="text-primary-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700">Historical exchange rate data</span>
              </li>
              <li className="flex items-start">
                <Zap className="text-primary-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700">Fast and accurate calculations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4">Need More?</h2>
            <p className="mb-4">
              Check out our API documentation for developers looking to integrate currency conversion into their applications.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-md transition-colors duration-300"
            >
              <span>API Docs</span>
              <ArrowUpRight className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;