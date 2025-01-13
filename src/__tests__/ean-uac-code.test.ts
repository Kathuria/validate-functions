import { isValid_EAN_UPC } from '../ean-uac-code';

describe('EAN/UPC Code Validation', () => {
  it('should return true for a valid 8-digit UPC code', () => {
    const validUPC8 = '12345678';
    expect(isValid_EAN_UPC(validUPC8)).toBe(true);
  });

  it('should return true for a valid 12-digit UPC code', () => {
    const validUPC12 = '123456789012';
    expect(isValid_EAN_UPC(validUPC12)).toBe(true);
  });

  it('should return true for a valid 13-digit EAN code', () => {
    const validEAN13 = '1234567890123';
    expect(isValid_EAN_UPC(validEAN13)).toBe(true);
  });

  it('should return false for a code with less than 8 digits', () => {
    const shortCode = '1234567';
    expect(isValid_EAN_UPC(shortCode)).toBe(false);
  });

  it('should return false for a code with more than 13 digits', () => {
    const longCode = '12345678901234';
    expect(isValid_EAN_UPC(longCode)).toBe(false);
  });

  it('should return false for a code with non-numeric characters', () => {
    const nonNumericCode = '12345A789012';
    expect(isValid_EAN_UPC(nonNumericCode)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    expect(isValid_EAN_UPC(emptyString)).toBe(false);
  });
});
