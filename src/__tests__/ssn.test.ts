import { isValid_SSN } from '../ssn';

describe('isValid_SSN', () => {
  it('should return false for SSN with length not equal to 9', () => {
    expect(isValid_SSN('123')).toBe(false);
    expect(isValid_SSN('1234567890')).toBe(false);
  });

  it('should return false for SSN starting with 9', () => {
    expect(isValid_SSN('912345678')).toBe(false);
  });

  it('should return false for SSN with invalid area numbers', () => {
    expect(isValid_SSN('000123456')).toBe(false);
    expect(isValid_SSN('666123456')).toBe(false);
  });

  it('should return false for SSN with invalid group numbers', () => {
    expect(isValid_SSN('123001234')).toBe(false);
  });

  it('should return false for SSN with invalid serial numbers', () => {
    expect(isValid_SSN('123450000')).toBe(false);
  });

  it('should return true for valid SSN', () => {
    expect(isValid_SSN('123456789')).toBe(true);
  });
});
