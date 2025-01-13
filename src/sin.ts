/**
 * Social Insurance Number (Canada) Validation
 * @param sin
 * @returns
 */
export const isValid_SIN = (sin: string): boolean => {
  const sanitized = sin.replace(/\s|-/g, '');
  if (!/^\d{9}$/.test(sanitized)) return false;

  const digits = sanitized.split('').map(Number);
  const checkDigit = digits.pop();

  const sum = digits
    .map((d, i) => (i % 2 === 0 ? d : d * 2))
    .map((d) => (d > 9 ? d - 9 : d))
    .reduce((a, b) => a + b, 0);

  return (10 - (sum % 10)) % 10 === checkDigit;
};
