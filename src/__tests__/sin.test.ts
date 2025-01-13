import { isValid_SIN } from '../sin';

describe('Social Insurance Number (SIN) Validation', () => {
  it('should return true for a valid SIN without spaces or dashes', () => {
    const validSIN = '123456782';
    expect(isValid_SIN(validSIN)).toBe(true);
  });

  it('should return true for a valid SIN with spaces', () => {
    const validSINWithSpaces = '123 456 782';
    expect(isValid_SIN(validSINWithSpaces)).toBe(true);
  });

  it('should return true for a valid SIN with dashes', () => {
    const validSINWithDashes = '123-456-782';
    expect(isValid_SIN(validSINWithDashes)).toBe(true);
  });

  it('should return false for an invalid SIN with incorrect check digit', () => {
    const invalidSIN = '123456789';
    expect(isValid_SIN(invalidSIN)).toBe(false);
  });

  it('should return false for a SIN with non-numeric characters', () => {
    const nonNumericSIN = '123A56782';
    expect(isValid_SIN(nonNumericSIN)).toBe(false);
  });

  it('should return false for a SIN with less than 9 digits', () => {
    const shortSIN = '12345678';
    expect(isValid_SIN(shortSIN)).toBe(false);
  });

  it('should return false for a SIN with more than 9 digits', () => {
    const longSIN = '1234567890';
    expect(isValid_SIN(longSIN)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    expect(isValid_SIN(emptyString)).toBe(false);
  });
});
