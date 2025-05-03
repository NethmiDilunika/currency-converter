import axios from 'axios';

// Base API URL for ExchangeRate-API or similar
const API_BASE_URL = 'https://open.er-api.com/v6/latest';

// Define exchange rate response types
export interface ExchangeRateResponse {
  base_code: string;
  time_last_update_utc: string;
  rates: Record<string, number>;
}

export interface MultiRateResponse {
  [currency: string]: {
    [currency: string]: number;
  };
}

/**
 * Fetch exchange rate between two currencies
 * @param fromCurrency Base currency code
 * @param toCurrency Target currency code
 * @returns Exchange rate as a number
 */
export const fetchExchangeRate = async (fromCurrency: string, toCurrency: string): Promise<number> => {
  try {
    // In a real implementation, you would include API keys in headers or as params
    // You might also implement caching or leverage a server-side proxy
    const response = await axios.get<ExchangeRateResponse>(`${API_BASE_URL}/${fromCurrency}`);
    
    if (!response.data.rates[toCurrency]) {
      throw new Error(`Exchange rate not available for ${toCurrency}`);
    }
    
    return response.data.rates[toCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
};

/**
 * Fetch exchange rates for multiple base currencies
 * @param baseCurrencies Array of base currency codes
 * @returns Object with exchange rates
 */
export const fetchMultipleExchangeRates = async (baseCurrencies: string[]): Promise<MultiRateResponse> => {
  try {
    // Create an object to store all rates
    const allRates: MultiRateResponse = {};
    
    // Fetch rates for each base currency
    await Promise.all(
      baseCurrencies.map(async (baseCurrency) => {
        const response = await axios.get<ExchangeRateResponse>(`${API_BASE_URL}/${baseCurrency}`);
        allRates[baseCurrency] = response.data.rates;
      })
    );
    
    return allRates;
  } catch (error) {
    console.error('Error fetching multiple exchange rates:', error);
    throw error;
  }
};

/**
 * Fetch historical exchange rates for a specific date
 * @param date Date in YYYY-MM-DD format
 * @param baseCurrency Base currency code
 * @returns Historical exchange rates
 */
export const fetchHistoricalRates = async (date: string, baseCurrency: string): Promise<ExchangeRateResponse> => {
  try {
    // Note: This endpoint might differ based on the API you use
    // Most free APIs have limited historical data
    const response = await axios.get<ExchangeRateResponse>(`${API_BASE_URL}/${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical rates:', error);
    throw error;
  }
};