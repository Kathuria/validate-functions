import { isValid_Aadhaar_Number } from '../aadhaar-validation';

describe('isValid_Aadhaar_Number', () => {
  it('should return false for null input', () => {
    expect(isValid_Aadhaar_Number(null as any)).toBe(false);
  });

  it('should return false for Aadhaar numbers with incorrect format', () => {
    expect(isValid_Aadhaar_Number('1234 5678 9012')).toBe(false);
    expect(isValid_Aadhaar_Number('23456789012')).toBe(false);
    expect(isValid_Aadhaar_Number('2345-6789-0123')).toBe(false);
  });

  it('should return true for valid Aadhaar numbers', () => {
    expect(isValid_Aadhaar_Number('2345 6789 0123')).toBe(true);
    expect(isValid_Aadhaar_Number('3456 7890 1234')).toBe(true);
  });

  it('should return false for Aadhaar numbers starting with 1', () => {
    expect(isValid_Aadhaar_Number('1234 5678 9012')).toBe(false);
  });

  it('should return false for Aadhaar numbers with spaces in wrong places', () => {
    expect(isValid_Aadhaar_Number('234 56789 0123')).toBe(false);
  });
});
