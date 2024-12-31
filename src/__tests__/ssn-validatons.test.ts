import { validateSSN } from '../ssn-validation';

describe('validateSSN', () => {
  it('should return false for SSN with length not equal to 9', () => {
    expect(validateSSN('123')).toBe(false);
    expect(validateSSN('1234567890')).toBe(false);
  });

  it('should return false for SSN starting with 9', () => {
    expect(validateSSN('912345678')).toBe(false);
  });

  it('should return false for SSN with invalid area numbers', () => {
    expect(validateSSN('000123456')).toBe(false);
    expect(validateSSN('666123456')).toBe(false);
  });

  it('should return false for SSN with invalid group numbers', () => {
    expect(validateSSN('123001234')).toBe(false);
  });

  it('should return false for SSN with invalid serial numbers', () => {
    expect(validateSSN('123450000')).toBe(false);
  });

  it('should return true for valid SSN', () => {
    expect(validateSSN('123456789')).toBe(true);
  });
});
