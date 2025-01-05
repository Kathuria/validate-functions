/**
 * Validate structure and optionally check if it's HTTPS.
 * @param url - The URL to validate.
 * @returns True if the URL is valid, otherwise false.
 */
export const isValid_URL = (url: string): boolean => {
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s<>]*)?(\?[^\s<>]*)?(#[^\s<>]*)?$/i;
  return urlRegex.test(url);
};
