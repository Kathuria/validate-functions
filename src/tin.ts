export enum ICountryCode {
  USA = 'USA',
  CAN = 'CAN',
  GBR = 'GBR',
  AUS = 'AUS',
  IND = 'IND',
  DEU = 'DEU',
  FRA = 'FRA',
  CHN = 'CHN',
  JPN = 'JPN',
  RUS = 'RUS',
  BRA = 'BRA',
  ITA = 'ITA',
  MEX = 'MEX',
  ZAF = 'ZAF',
  SGP = 'SGP',
  NLD = 'NLD',
  ESP = 'ESP',
  ARG = 'ARG',
  TUR = 'TUR',
  SAU = 'SAU',
  UAE = 'UAE',
  SWE = 'SWE',
  CHE = 'CHE',
  BEL = 'BEL',
}

/**
 * TIN Validation
 * @param identifier
 * @param countryCode
 * @returns
 */
export const isValid_TIN = (
  identifier: string,
  countryCode: ICountryCode
): boolean => {
  const tinEINRegexes: { [key in ICountryCode]: RegExp } = {
    [ICountryCode.USA]: /^\d{2}-\d{7}$/, // EIN (e.g., 12-3456789)
    [ICountryCode.CAN]: /^\d{9}$/, // SIN
    [ICountryCode.GBR]: /^\d{9}$/, // NI
    [ICountryCode.AUS]: /^\d{9}$/, // TFN
    [ICountryCode.IND]: /^[A-Z]{5}\d{4}[A-Z]{1}$/, // PAN
    [ICountryCode.DEU]: /^\d{11}$/, // Germany TIN
    [ICountryCode.FRA]: /^\d{13}$/, // France TIN
    [ICountryCode.CHN]: /^\d{15}$/, // China TIN
    [ICountryCode.JPN]: /^\d{12}$/, // Japan TIN
    [ICountryCode.RUS]: /^\d{10}$/, // Russia INN
    [ICountryCode.BRA]: /^\d{11}$/, // Brazil CPF
    [ICountryCode.ITA]: /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/, // Codice Fiscale
    [ICountryCode.MEX]: /^[A-Z]{4}\d{6}[A-Z0-9]{3}$/, // RFC
    [ICountryCode.ZAF]: /^\d{10}$/, // South Africa TIN
    [ICountryCode.SGP]: /^\d{8}[A-Z]$/, // Singapore TIN
    [ICountryCode.NLD]: /^\d{9}$/, // Netherlands TIN
    [ICountryCode.ESP]: /^[A-Z]\d{8}$/, // Spain TIN
    [ICountryCode.ARG]: /^\d{11}$/, // Argentina CUIT
    [ICountryCode.TUR]: /^\d{10}$/, // Turkey TIN
    [ICountryCode.SAU]: /^\d{10}$/, // Saudi Arabia TIN
    [ICountryCode.UAE]: /^\d{15}$/, // UAE TIN
    [ICountryCode.SWE]: /^\d{10}$/, // Sweden TIN
    [ICountryCode.CHE]: /^\d{9}$/, // Switzerland TIN
    [ICountryCode.BEL]: /^\d{11}$/, // Belgium TIN
  };

  const regex = tinEINRegexes[countryCode];
  return regex.test(identifier);
};
