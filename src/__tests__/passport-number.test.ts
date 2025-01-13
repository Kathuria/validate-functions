import {
  isValid_Passport_Number,
  PassportCountryCode,
} from '../passport-number';

describe('Passport Number Validation', () => {
  const testCases = [
    { country: PassportCountryCode.USA, valid: 'A1234567', invalid: '12345' },
    {
      country: PassportCountryCode.CAN,
      valid: 'AB123456',
      invalid: 'A1234567',
    },
    {
      country: PassportCountryCode.GBR,
      valid: '123456789',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.AUS,
      valid: 'A1234567',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.IND,
      valid: 'A-1234567',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.DEU,
      valid: 'C12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.FRA,
      valid: '12AB34567',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.CHN,
      valid: 'E12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.JPN,
      valid: 'AB1234567',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.RUS,
      valid: '123456789',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.BRA,
      valid: 'AB123456',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.ITA,
      valid: 'A12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.MEX,
      valid: '123456789',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.ZAF,
      valid: 'A12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.KOR,
      valid: 'A12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.SGP,
      valid: 'S1234567A',
      invalid: 'S12345678A',
    },
    {
      country: PassportCountryCode.NLD,
      valid: 'A12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.ESP,
      valid: 'ABC123456',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.ARG,
      valid: 'ABC123456',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.TUR,
      valid: 'AB1234567',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.SAU,
      valid: 'A12345678',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.UAE,
      valid: '123456789',
      invalid: '12345678',
    },
    {
      country: PassportCountryCode.SWE,
      valid: 'A1B2C3D4E',
      invalid: 'ABCD1234567',
    },
    {
      country: PassportCountryCode.CHE,
      valid: 'C1234567',
      invalid: 'C12#4567',
    },
    {
      country: PassportCountryCode.BEL,
      valid: 'AB123456',
      invalid: '12345678',
    },
  ];

  testCases.forEach(({ country, valid, invalid }) => {
    it(`should return true for a valid ${country} passport number`, () => {
      expect(isValid_Passport_Number(valid, country)).toBe(true);
    });

    it(`should return false for an invalid ${country} passport number`, () => {
      expect(isValid_Passport_Number(invalid, country)).toBe(false);
    });
  });
});
