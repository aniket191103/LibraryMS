/**
 * Formats a date string in the format "YYYY-MM-DD".
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };
  
  /**
   * Calculates the number of days between two dates.
   * @param {string} startDate - The start date in the format "YYYY-MM-DD".
   * @param {string} endDate - The end date in the format "YYYY-MM-DD".
   * @returns {number} The number of days between the two dates.
   */
  export const calculateDaysDiff = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };
  
  /**
   * Calculates the fine amount based on the number of days the book is overdue.
   * @param {number} daysDiff - The number of days the book is overdue.
   * @param {number} finePerDay - The fine amount per day.
   * @returns {number} The calculated fine amount.
   */
  export const calculateFineAmount = (daysDiff, finePerDay) => {
    return daysDiff * finePerDay;
  };
  
  /**
   * Generates a unique ID.
   * @returns {string} A unique ID.
   */
  export const generateUniqueId = () => {
    return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 8)}`;
  };
  