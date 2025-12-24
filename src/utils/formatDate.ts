/**
 * Formats a date string into a readable format
 * @param dateString - Date string in YYYY-MM format
 * @returns Formatted date string (e.g., "Jan 2020")
 */
export function formatDate(dateString: string): string {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

/**
 * Calculates duration between two dates
 * @param startDate - Start date string
 * @param endDate - End date string or null for current
 * @returns Duration string (e.g., "2 years 3 months")
 */
export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  }

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }

  return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${
    remainingMonths === 1 ? 'month' : 'months'
  }`;
}

