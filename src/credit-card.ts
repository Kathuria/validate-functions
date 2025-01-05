/**
 * A credit card is essentially a means of borrowing money that is accompanied by interest and sometimes fees.
 * Validation is based on Luhn algorithm
 * @param cardNumber
 * @returns
 */
export const isValid_Credit_Card = (cardNumber: string): boolean => {
  const sanitized = cardNumber.replace(/\D/g, '');
  let sum = 0;
  let shouldDouble = false;

  if (!sanitized) return false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
