import { isValid_Base64 } from '../base64';

describe('Base64 Validation', () => {
  it('should return true for a valid Base64 string', () => {
    const validBase64 = 'U29mdHdhcmUgRW5naW5lZXJpbmc=';
    expect(isValid_Base64(validBase64)).toBe(true);
  });

  it('should return true for a valid Base64 string with padding', () => {
    const validBase64WithPadding = 'U29mdHdhcmU=';
    expect(isValid_Base64(validBase64WithPadding)).toBe(true);
  });

  it('should return false for an invalid Base64 string with invalid characters', () => {
    const invalidBase64 = 'U29mdHdhcmU$';
    expect(isValid_Base64(invalidBase64)).toBe(false);
  });

  it('should return false for a string with incorrect Base64 padding', () => {
    const incorrectPadding = 'U29mdHdhcmU==';
    expect(isValid_Base64(incorrectPadding)).toBe(false);
  });

  it('should return true for an empty string (considered valid Base64)', () => {
    const emptyString = '';
    expect(isValid_Base64(emptyString)).toBe(true);
  });

  it('should return false for a non-Base64 string', () => {
    const nonBase64 = 'Hello, World!';
    expect(isValid_Base64(nonBase64)).toBe(false);
  });
});
