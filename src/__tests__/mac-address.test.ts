import { isValid_MAC_Address } from '../mac-address';

describe('MAC Address Validation', () => {
  it('should return true for a valid MAC address', () => {
    const validMAC = '01:23:45:67:89:AB';
    expect(isValid_MAC_Address(validMAC)).toBe(true);
  });

  it('should return true for a valid MAC address with lowercase letters', () => {
    const validMACLower = '01:23:45:67:89:ab';
    expect(isValid_MAC_Address(validMACLower)).toBe(true);
  });

  it('should return false for a MAC address with invalid characters', () => {
    const invalidMACChars = '01:23:45:67:89:ZZ';
    expect(isValid_MAC_Address(invalidMACChars)).toBe(false);
  });

  it('should return false for a MAC address with incorrect length', () => {
    const shortMAC = '01:23:45:67:89';
    expect(isValid_MAC_Address(shortMAC)).toBe(false);
  });

  it('should return false for a MAC address with incorrect delimiter', () => {
    const invalidDelimiterMAC = '01-23-45-67-89-AB';
    expect(isValid_MAC_Address(invalidDelimiterMAC)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    expect(isValid_MAC_Address(emptyString)).toBe(false);
  });
});
