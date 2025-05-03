/**
 * Format a number as currency
 * @param amount Amount to format
 * @param currencyCode Currency code (e.g., USD, EUR)
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currencyCode: string): string => {
  // Get the locale based on the currency
  const locale = getLocaleFromCurrency(currencyCode);
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
};

/**
 * Get appropriate locale for currency formatting
 * @param currencyCode Currency code
 * @returns Locale string
 */
const getLocaleFromCurrency = (currencyCode: string): string => {
  const currencyLocaleMap: Record<string, string> = {
    USD: 'en-US',
    EUR: 'de-DE',
    GBP: 'en-GB',
    JPY: 'ja-JP',
    CNY: 'zh-CN',
    CAD: 'en-CA',
    AUD: 'en-AU',
    CHF: 'de-CH',
    // Add more mappings as needed
  };
  
  return currencyLocaleMap[currencyCode] || 'en-US';
};

/**
 * Format a date
 * @param date Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};