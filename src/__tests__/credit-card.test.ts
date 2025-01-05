import { isValid_Credit_Card } from '../credit-card';

describe('Credit Card Validation', () => {
  it('should return true for a valid credit card number', () => {
    const validCardNumber = '4539 1488 0343 6467'; // Example of a valid Visa card number
    expect(isValid_Credit_Card(validCardNumber)).toBe(true);
  });

  it('should return false for an invalid credit card number', () => {
    const invalidCardNumber = '1234 5678 9012 3456'; // Example of an invalid card number
    expect(isValid_Credit_Card(invalidCardNumber)).toBe(false);
  });

  it('should return true for a valid credit card number without spaces', () => {
    const validCardNumberNoSpaces = '4539148803436467';
    expect(isValid_Credit_Card(validCardNumberNoSpaces)).toBe(true);
  });

  it('should return false for an empty string', () => {
    const emptyCardNumber = '';
    expect(isValid_Credit_Card(emptyCardNumber)).toBe(false);
  });
});
