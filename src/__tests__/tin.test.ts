import { isValid_TIN, ICountryCode } from '../tin';

describe('TIN Validation', () => {
  const testCases = [
    { country: ICountryCode.USA, valid: '12-3456789', invalid: '123456789' },
    { country: ICountryCode.CAN, valid: '123456789', invalid: '12345678' },
    { country: ICountryCode.GBR, valid: '123456789', invalid: '12345678' },
    { country: ICountryCode.AUS, valid: '123456789', invalid: '12345678' },
    { country: ICountryCode.IND, valid: 'ABCDE1234F', invalid: '123456789' },
    { country: ICountryCode.DEU, valid: '12345678901', invalid: '123456789' },
    { country: ICountryCode.FRA, valid: '1234567890123', invalid: '123456789' },
    {
      country: ICountryCode.CHN,
      valid: '123456789012345',
      invalid: '123456789',
    },
    { country: ICountryCode.JPN, valid: '123456789012', invalid: '123456789' },
    { country: ICountryCode.RUS, valid: '1234567890', invalid: '123456789' },
    { country: ICountryCode.BRA, valid: '12345678901', invalid: '123456789' },
    {
      country: ICountryCode.ITA,
      valid: 'RSSMRA85M01H501Z',
      invalid: '123456789',
    },
    { country: ICountryCode.MEX, valid: 'ABCD123456XYZ', invalid: '123456789' },
    { country: ICountryCode.ZAF, valid: '1234567890', invalid: '123456789' },
    { country: ICountryCode.SGP, valid: '12345678A', invalid: '123456789' },
    { country: ICountryCode.NLD, valid: '123456789', invalid: '12345678' },
    { country: ICountryCode.ESP, valid: 'A12345678', invalid: '123456789' },
    { country: ICountryCode.ARG, valid: '12345678901', invalid: '123456789' },
    { country: ICountryCode.TUR, valid: '1234567890', invalid: '123456789' },
    { country: ICountryCode.SAU, valid: '1234567890', invalid: '123456789' },
    {
      country: ICountryCode.UAE,
      valid: '123456789012345',
      invalid: '123456789',
    },
    { country: ICountryCode.SWE, valid: '1234567890', invalid: '123456789' },
    { country: ICountryCode.CHE, valid: '123456789', invalid: '12345678' },
    { country: ICountryCode.BEL, valid: '12345678901', invalid: '123456789' },
  ];

  testCases.forEach(({ country, valid, invalid }) => {
    it(`should return true for a valid ${country} TIN/EIN`, () => {
      expect(isValid_TIN(valid, country)).toBe(true);
    });

    it(`should return false for an invalid ${country} TIN/EIN`, () => {
      expect(isValid_TIN(invalid, country)).toBe(false);
    });
  });
});
