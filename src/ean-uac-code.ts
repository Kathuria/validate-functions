/**
 * EAN/UPC Code Validation
 * @param code
 * @returns
 */
export const isValid_EAN_UPC = (code: string): boolean => {
  const eanUpcRegex = /^(?:\d{8}|\d{12,13})$/;
  return eanUpcRegex.test(code);
};
