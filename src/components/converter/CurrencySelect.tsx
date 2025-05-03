import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { currencies } from '../../data/currencies';

interface CurrencySelectProps {
  id: string;
  value: string;
  onChange: (currency: string) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ id, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter currencies based on search term
  const filteredCurrencies = searchTerm
    ? currencies.filter(
        (currency) =>
          currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          currency.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : currencies;

  // Get selected currency
  const selectedCurrency = currencies.find((currency) => currency.code === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={id}
      >
        <div className="flex items-center">
          <span className="mr-2">{selectedCurrency?.flag}</span>
          <span>{selectedCurrency?.code}</span>
          <span className="ml-2 text-gray-500 text-sm hidden md:inline">
            ({selectedCurrency?.name})
          </span>
        </div>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md overflow-auto">
          <div className="sticky top-0 bg-white p-2 border-b">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Search currency..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          
          <ul role="listbox" className="py-1">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((currency) => (
                <li
                  key={currency.code}
                  role="option"
                  aria-selected={currency.code === value}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                    currency.code === value ? 'bg-primary-50 text-primary-700' : ''
                  }`}
                  onClick={() => {
                    onChange(currency.code);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  <span className="mr-2">{currency.flag}</span>
                  <span className="font-medium">{currency.code}</span>
                  <span className="ml-2 text-gray-500 text-sm">{currency.name}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500 text-center">No currencies found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CurrencySelect;