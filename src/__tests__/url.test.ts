import { isValid_URL } from '../url';

describe('URL Validation', () => {
  it('should return true for a valid HTTP URL', () => {
    expect(isValid_URL('http://example.com')).toBe(true);
  });

  it('should return true for a valid HTTPS URL', () => {
    expect(isValid_URL('https://example.com')).toBe(true);
  });

  it('should return true for a valid URL without protocol', () => {
    expect(isValid_URL('example.com')).toBe(true);
  });

  it('should return false for a URL with invalid characters', () => {
    expect(isValid_URL('http://example.com/<>')).toBe(false);
  });

  it('should return true for a URL with query parameters', () => {
    expect(isValid_URL('http://example.com?name=value')).toBe(true);
  });

  it('should return true for a URL with a fragment', () => {
    expect(isValid_URL('http://example.com#section')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isValid_URL('')).toBe(false);
  });

  it('should return false for a URL with only protocol', () => {
    expect(isValid_URL('http://')).toBe(false);
  });
});
