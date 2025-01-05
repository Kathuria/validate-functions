import { isValid_IPv4, isValid_IPv6 } from '../ip';

describe('IPv4 Validation', () => {
  it('should return true for a valid IPv4 address', () => {
    const validIPv4 = '172.16.254.1';
    expect(isValid_IPv4(validIPv4)).toBe(true);
  });

  it('should return false for an invalid IPv4 address', () => {
    const invalidIPv4 = '256.256.256.256';
    expect(isValid_IPv4(invalidIPv4)).toBe(false);
  });

  it('should return false for an incomplete IPv4 address', () => {
    const incompleteIPv4 = '192.168.1';
    expect(isValid_IPv4(incompleteIPv4)).toBe(false);
  });

  it('should return false for a non-numeric IPv4 address', () => {
    const nonNumericIPv4 = 'abc.def.ghi.jkl';
    expect(isValid_IPv4(nonNumericIPv4)).toBe(false);
  });

  it('should return true for edge case IPv4 address 0.0.0.0', () => {
    const edgeCaseIPv4 = '0.0.0.0';
    expect(isValid_IPv4(edgeCaseIPv4)).toBe(true);
  });

  it('should return true for edge case IPv4 address 255.255.255.255', () => {
    const edgeCaseIPv4 = '255.255.255.255';
    expect(isValid_IPv4(edgeCaseIPv4)).toBe(true);
  });
});

describe('IPv6 Validation', () => {
  it('should return true for a valid IPv6 address', () => {
    const validIPv6 = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    expect(isValid_IPv6(validIPv6)).toBe(true);
  });

  it('should return false for an invalid IPv6 address', () => {
    const invalidIPv6 = '2001:db8::1:2::3';
    expect(isValid_IPv6(invalidIPv6)).toBe(false);
  });

  it('should return false for an incomplete IPv6 address', () => {
    const incompleteIPv6 = '2001:0db8:85a3:0000:0000:8a2e:0370';
    expect(isValid_IPv6(incompleteIPv6)).toBe(false);
  });

  it('should return false for a non-hexadecimal IPv6 address', () => {
    const nonHexIPv6 = '2001:0db8:85a3:zzzz:0000:8a2e:0370:7334';
    expect(isValid_IPv6(nonHexIPv6)).toBe(false);
  });

  it('should return true for edge case IPv6 address ::1 (loopback)', () => {
    const loopbackIPv6 = '::1';
    expect(isValid_IPv6(loopbackIPv6)).toBe(true);
  });

  it('should return true for edge case IPv6 address :: (unspecified)', () => {
    const unspecifiedIPv6 = '::';
    expect(isValid_IPv6(unspecifiedIPv6)).toBe(true);
  });
});
