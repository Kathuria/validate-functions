/**
 * MAC Address Validation
 * @param mac
 * @returns
 */
export const isValid_MAC_Address = (mac: string): boolean => {
  const macRegex = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/;
  return macRegex.test(mac);
};
