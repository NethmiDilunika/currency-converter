import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { ArrowDownUp, Loader2 } from 'lucide-react';
import CurrencySelect from './CurrencySelect';
import { fetchExchangeRate } from '../../services/currencyApi';
import { formatCurrency } from '../../utils/formatters';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  // Fetch exchange rate
  const { data: rate, isLoading, isError, refetch } = useQuery(
    ['exchangeRate', fromCurrency, toCurrency],
    () => fetchExchangeRate(fromCurrency, toCurrency),
    {
      enabled: !!fromCurrency && !!toCurrency,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  // Update converted amount when rate changes or amount changes
  useEffect(() => {
    if (rate && amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount)) {
        setConvertedAmount(numAmount * rate);
      }
    }
  }, [rate, amount]);

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Handle amount change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Currency Converter</h2>
      
      <div className="space-y-6">
        {/* Amount Input */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter amount"
            aria-label="Amount to convert"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {/* From Currency */}
          <div className="md:col-span-2">
            <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <CurrencySelect
              id="fromCurrency"
              value={fromCurrency}
              onChange={(currency) => setFromCurrency(currency)}
            />
          </div>
          
          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwapCurrencies}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Swap currencies"
            >
              <ArrowDownUp className="text-primary-500" size={20} />
            </button>
          </div>
          
          {/* To Currency */}
          <div className="md:col-span-2">
            <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <CurrencySelect
              id="toCurrency"
              value={toCurrency}
              onChange={(currency) => setToCurrency(currency)}
            />
          </div>
        </div>
        
        {/* Conversion Result */}
        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-4">
              <Loader2 className="animate-spin text-primary-500" size={24} />
              <span className="ml-2 text-gray-600">Fetching exchange rate...</span>
            </div>
          ) : isError ? (
            <div className="text-center text-error-500 py-4">
              <p>Failed to fetch exchange rate. Please try again.</p>
              <button
                onClick={() => refetch()}
                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm text-gray-600 mb-1">
                {parseFloat(amount) || 0} {fromCurrency} equals
              </p>
              <p className="text-3xl font-bold text-primary-700 mb-1">
                {formatCurrency(convertedAmount || 0, toCurrency)}
              </p>
              <p className="text-sm text-gray-500">
                1 {fromCurrency} = {rate ? rate.toFixed(6) : '0'} {toCurrency}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Exchange rates updated {rate ? 'just now' : 'N/A'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;