// Define the CountryCode enum
export enum CountryCode {
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
  ZA = 'ZA'  // South Africa
}

/**
 * Validates a postal code based on the country code.
 * @param postalCode - The postal code to validate.
 * @param countryCode - The country code as an enum.
 * @returns True if the postal code is valid for the given country, otherwise false.
 */
export const isValid_Postal_Code = (postalCode: string, countryCode: CountryCode): boolean => {
  const fiveDigitRegex = /^\d{5}$/;
  const sixDigitRegex = /^\d{6}$/;
  const fourDigitRegex = /^\d{4}$/;

  const postalCodeRegexes: { [key in CountryCode]: RegExp } = {
    [CountryCode.US]: /^\d{5}(-\d{4})?$/,
    [CountryCode.CN]: sixDigitRegex,
    [CountryCode.IN]: sixDigitRegex,
    [CountryCode.ID]: fiveDigitRegex,
    [CountryCode.PK]: fiveDigitRegex,
    [CountryCode.BR]: /^\d{5}-\d{3}$/,
    [CountryCode.NG]: sixDigitRegex,
    [CountryCode.BD]: fourDigitRegex,
    [CountryCode.RU]: sixDigitRegex,
    [CountryCode.MX]: fiveDigitRegex,
    [CountryCode.JP]: /^\d{3}-\d{4}$/,
    [CountryCode.ET]: fourDigitRegex,
    [CountryCode.PH]: fourDigitRegex,
    [CountryCode.EG]: fiveDigitRegex,
    [CountryCode.VN]: sixDigitRegex,
    [CountryCode.CD]: fiveDigitRegex,
    [CountryCode.TR]: fiveDigitRegex,
    [CountryCode.IR]: /^\d{10}$/,
    [CountryCode.DE]: fiveDigitRegex,
    [CountryCode.TH]: fiveDigitRegex,
    [CountryCode.GB]: /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/,
    [CountryCode.FR]: fiveDigitRegex,
    [CountryCode.IT]: fiveDigitRegex,
    [CountryCode.TZ]: fiveDigitRegex,
    [CountryCode.ZA]: fourDigitRegex
  };

  const regex = postalCodeRegexes[countryCode];
  return regex ? regex.test(postalCode) : false;
};
