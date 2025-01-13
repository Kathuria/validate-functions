// Define the PostalCountryCode enum
export enum PostalCountryCode {
  US = 'US', // United States
  CN = 'CN', // China
  IN = 'IN', // India
  ID = 'ID', // Indonesia
  PK = 'PK', // Pakistan
  BR = 'BR', // Brazil
  NG = 'NG', // Nigeria
  BD = 'BD', // Bangladesh
  RU = 'RU', // Russia
  MX = 'MX', // Mexico
  JP = 'JP', // Japan
  ET = 'ET', // Ethiopia
  PH = 'PH', // Philippines
  EG = 'EG', // Egypt
  VN = 'VN', // Vietnam
  CD = 'CD', // Democratic Republic of the Congo
  TR = 'TR', // Turkey
  IR = 'IR', // Iran
  DE = 'DE', // Germany
  TH = 'TH', // Thailand
  GB = 'GB', // United Kingdom
  FR = 'FR', // France
  IT = 'IT', // Italy
  TZ = 'TZ', // Tanzania
  ZA = 'ZA', // South Africa
}

/**
 * Validates a postal code based on the country code.
 * @param postalCode - The postal code to validate.
 * @param countryCode - The country code as an enum.
 * @returns True if the postal code is valid for the given country, otherwise false.
 */
export const isValid_Postal_Code = (
  postalCode: string,
  countryCode: PostalCountryCode
): boolean => {
  const fiveDigitRegex = /^\d{5}$/;
  const sixDigitRegex = /^\d{6}$/;
  const fourDigitRegex = /^\d{4}$/;

  const postalCodeRegexes: { [key in PostalCountryCode]: RegExp } = {
    [PostalCountryCode.US]: /^\d{5}(-\d{4})?$/,
    [PostalCountryCode.CN]: sixDigitRegex,
    [PostalCountryCode.IN]: sixDigitRegex,
    [PostalCountryCode.ID]: fiveDigitRegex,
    [PostalCountryCode.PK]: fiveDigitRegex,
    [PostalCountryCode.BR]: /^\d{5}-\d{3}$/,
    [PostalCountryCode.NG]: sixDigitRegex,
    [PostalCountryCode.BD]: fourDigitRegex,
    [PostalCountryCode.RU]: sixDigitRegex,
    [PostalCountryCode.MX]: fiveDigitRegex,
    [PostalCountryCode.JP]: /^\d{3}-\d{4}$/,
    [PostalCountryCode.ET]: fourDigitRegex,
    [PostalCountryCode.PH]: fourDigitRegex,
    [PostalCountryCode.EG]: fiveDigitRegex,
    [PostalCountryCode.VN]: sixDigitRegex,
    [PostalCountryCode.CD]: fiveDigitRegex,
    [PostalCountryCode.TR]: fiveDigitRegex,
    [PostalCountryCode.IR]: /^\d{10}$/,
    [PostalCountryCode.DE]: fiveDigitRegex,
    [PostalCountryCode.TH]: fiveDigitRegex,
    [PostalCountryCode.GB]: /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/,
    [PostalCountryCode.FR]: fiveDigitRegex,
    [PostalCountryCode.IT]: fiveDigitRegex,
    [PostalCountryCode.TZ]: fiveDigitRegex,
    [PostalCountryCode.ZA]: fourDigitRegex,
  };

  const regex = postalCodeRegexes[countryCode];
  return regex ? regex.test(postalCode) : false;
};
