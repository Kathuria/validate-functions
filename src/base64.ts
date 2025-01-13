/**
 * Base64 String Validation
 * @param base64
 * @returns
 */
export const isValid_Base64 = (base64: string): boolean => {
  const base64Regex =
    /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)?$/;
  return base64Regex.test(base64);
};
