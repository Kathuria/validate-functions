import { isValid_Hex_Color } from '../hex-color';

describe('Hex Color Validation', () => {
  it('should return true for a valid 3-digit hex color', () => {
    const validHex3 = '#abc';
    expect(isValid_Hex_Color(validHex3)).toBe(true);
  });

  it('should return true for a valid 6-digit hex color', () => {
    const validHex6 = '#abcdef';
    expect(isValid_Hex_Color(validHex6)).toBe(true);
  });

  it('should return false for an invalid hex color with wrong length', () => {
    const invalidHexLength = '#abcd';
    expect(isValid_Hex_Color(invalidHexLength)).toBe(false);
  });

  it('should return false for a hex color without #', () => {
    const missingHash = '123456';
    expect(isValid_Hex_Color(missingHash)).toBe(false);
  });

  it('should return false for a hex color with invalid characters', () => {
    const invalidChars = '#abg123';
    expect(isValid_Hex_Color(invalidChars)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    expect(isValid_Hex_Color(emptyString)).toBe(false);
  });
});
