import { isValid_Email } from '../email-validation';

describe('isValid_Email', () => {
  it('should return true for valid email addresses', () => {
    expect(isValid_Email('test@example.com')).toBe(true);
    expect(isValid_Email('user_name@example.co.uk')).toBe(true);
    expect(isValid_Email('user-name@sub.example.com')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValid_Email('plainaddress')).toBe(false);
    expect(isValid_Email('@missingusername.com')).toBe(false);
    expect(isValid_Email('username@.com')).toBe(false);
    expect(isValid_Email('username@com')).toBe(false);
    expect(isValid_Email('username@com.')).toBe(false);
  });

  it('should return false for emails with spaces', () => {
    expect(isValid_Email('username@ example.com')).toBe(false);
  });

  it('should return false for null or undefined inputs', () => {
    expect(isValid_Email(null as any)).toBe(false);
    expect(isValid_Email(undefined as any)).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isValid_Email('')).toBe(false);
  });
});
