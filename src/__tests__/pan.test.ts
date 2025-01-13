import { isValid_PAN } from '../pan';

describe('PAN Validation', () => {
  it('should return true for a valid PAN', () => {
    const validPAN = 'ABCDE1234F';
    expect(isValid_PAN(validPAN)).toBe(true);
  });

  it('should return false for a PAN with incorrect letter count', () => {
    const invalidPANLetters = 'ABCD1234F';
    expect(isValid_PAN(invalidPANLetters)).toBe(false);
  });

  it('should return false for a PAN with incorrect digit count', () => {
    const invalidPANDigits = 'ABCDE123F';
    expect(isValid_PAN(invalidPANDigits)).toBe(false);
  });

  it('should return false for a PAN with lowercase letters', () => {
    const invalidPANLowercase = 'abcde1234f';
    expect(isValid_PAN(invalidPANLowercase)).toBe(false);
  });

  it('should return false for a PAN with special characters', () => {
    const invalidPANSpecialChars = 'ABCD@1234F';
    expect(isValid_PAN(invalidPANSpecialChars)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    expect(isValid_PAN(emptyString)).toBe(false);
  });
});
