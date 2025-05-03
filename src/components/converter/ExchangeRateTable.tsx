import React from 'react';
import { useQuery } from 'react-query';
import { fetchMultipleExchangeRates } from '../../services/currencyApi';
import { formatCurrency } from '../../utils/formatters';
import { ArrowDownUp, Loader2 } from 'lucide-react';

const baseCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];
const targetCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'];

const ExchangeRateTable: React.FC = () => {
  // Filter out duplicates from target currencies
  const uniqueTargets = targetCurrencies.filter(
    (currency) => !baseCurrencies.includes(currency) || currency === 'USD'
  );

  // Fetch exchange rates for popular currency pairs
  const { data: rates, isLoading, isError } = useQuery(
    'popularExchangeRates',
    () => fetchMultipleExchangeRates(baseCurrencies),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="animate-spin text-primary-500 mr-2" size={24} />
        <span>Loading exchange rates...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-error-500 py-8">
        <p>Failed to load exchange rates data.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-3 px-4 text-left font-semibold">Currency</th>
            {uniqueTargets.map((currency) => (
              <th key={currency} className="py-3 px-4 text-right font-semibold">
                {currency}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {baseCurrencies.map((baseCurrency) => (
            <tr key={baseCurrency} className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">
                <div className="flex items-center">
                  <span className="mr-2">
                    {baseCurrency === 'USD' ? '🇺🇸' : 
                     baseCurrency === 'EUR' ? '🇪🇺' : 
                     baseCurrency === 'GBP' ? '🇬🇧' : 
                     baseCurrency === 'JPY' ? '🇯🇵' : 
                     baseCurrency === 'CAD' ? '🇨🇦' : ''}
                  </span>
                  <span>{baseCurrency}</span>
                </div>
              </td>
              {uniqueTargets.map((targetCurrency) => {
                // Display '—' if it's the same currency
                if (baseCurrency === targetCurrency) {
                  return (
                    <td key={targetCurrency} className="py-3 px-4 text-right text-gray-500">
                      —
                    </td>
                  );
                }

                // Get the rate if available
                const rate = rates?.[baseCurrency]?.[targetCurrency];
                
                return (
                  <td key={targetCurrency} className="py-3 px-4 text-right">
                    {rate ? 
                      <div className="flex items-center justify-end">
                        <ArrowDownUp className="text-primary-400 mr-1" size={12} />
                        <span>{rate.toFixed(4)}</span>
                      </div> : 
                      'N/A'
                    }
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRateTable;