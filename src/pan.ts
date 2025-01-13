/**
 * PAN (Permanent Account Number) Validation
 * @param pan
 * @returns
 */
export const isValid_PAN = (pan: string): boolean => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan);
};
