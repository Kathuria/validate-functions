export enum PassportCountryCode {
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
  KOR = 'KOR',
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
 * Passport Number Validation
 * @param passportNumber
 * @param countryCode
 * @returns
 */
export const isValid_Passport_Number = (
  passportNumber: string,
  countryCode: PassportCountryCode
): boolean => {
  const passportRegexes: { [key in PassportCountryCode]: RegExp } = {
    [PassportCountryCode.USA]: /^[a-zA-Z0-9]{6,9}$/,
    [PassportCountryCode.CAN]: /^[A-Z]{2}\d{6}$/,
    [PassportCountryCode.GBR]: /^\d{9}$/,
    [PassportCountryCode.AUS]: /^[A-Z]\d{7}$/,
    [PassportCountryCode.IND]: /^[A-Z]{1}-\d{7}$/,
    [PassportCountryCode.DEU]: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    [PassportCountryCode.FRA]: /^[0-9]{2}[A-Z]{2}[0-9]{5}$/,
    [PassportCountryCode.CHN]: /^[EG]\d{8}$/,
    [PassportCountryCode.JPN]: /^[A-Z]{2}\d{7}$/,
    [PassportCountryCode.RUS]: /^\d{9}$/,
    [PassportCountryCode.BRA]: /^[A-Z]{2}\d{6}$/,
    [PassportCountryCode.ITA]: /^[A-Z0-9]{9}$/,
    [PassportCountryCode.MEX]: /^\d{9}$/,
    [PassportCountryCode.ZAF]: /^[A-Z0-9]{9}$/,
    [PassportCountryCode.KOR]: /^[A-Z]{1}\d{8}$/,
    [PassportCountryCode.SGP]: /^[A-Z]{1}\d{7}[A-Z]$/,
    [PassportCountryCode.NLD]: /^[A-Z]{1}[0-9]{8}$/,
    [PassportCountryCode.ESP]: /^[A-Z]{3}[0-9]{6}$/,
    [PassportCountryCode.ARG]: /^[A-Z]{3}[0-9]{6}$/,
    [PassportCountryCode.TUR]: /^[A-Z]{2}[0-9]{7}$/,
    [PassportCountryCode.SAU]: /^[A-Z]{1}[0-9]{8}$/,
    [PassportCountryCode.UAE]: /^\d{9}$/,
    [PassportCountryCode.SWE]: /^[A-Z0-9]{8,9}$/,
    [PassportCountryCode.CHE]: /^[A-Z0-9]{8}$/,
    [PassportCountryCode.BEL]: /^[A-Z]{2}[0-9]{6}$/,
  };

  const regex = passportRegexes[countryCode];
  return regex.test(passportNumber);
};
