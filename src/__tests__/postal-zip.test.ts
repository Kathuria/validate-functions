import { isValid_Postal_Code, CountryCode } from '../postal-zip';

describe('Postal Code Validation', () => {
  describe('United States', () => {
    it('should return true for a valid 5-digit US postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.US)).toBe(true);
    });

    it('should return true for a valid 9-digit US postal code', () => {
      expect(isValid_Postal_Code('12345-6789', CountryCode.US)).toBe(true);
    });

    it('should return false for an invalid US postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.US)).toBe(false);
    });
  });

  describe('China', () => {
    it('should return true for a valid Chinese postal code', () => {
      expect(isValid_Postal_Code('100000', CountryCode.CN)).toBe(true);
    });

    it('should return false for an invalid Chinese postal code', () => {
      expect(isValid_Postal_Code('10000', CountryCode.CN)).toBe(false);
    });
  });

  describe('India', () => {
    it('should return true for a valid Indian postal code', () => {
      expect(isValid_Postal_Code('110001', CountryCode.IN)).toBe(true);
    });

    it('should return false for an invalid Indian postal code', () => {
      expect(isValid_Postal_Code('11000', CountryCode.IN)).toBe(false);
    });
  });

  describe('Indonesia', () => {
    it('should return true for a valid Indonesian postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.ID)).toBe(true);
    });

    it('should return false for an invalid Indonesian postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.ID)).toBe(false);
    });
  });

  describe('Pakistan', () => {
    it('should return true for a valid Pakistani postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.PK)).toBe(true);
    });

    it('should return false for an invalid Pakistani postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.PK)).toBe(false);
    });
  });

  describe('Brazil', () => {
    it('should return true for a valid Brazilian postal code', () => {
      expect(isValid_Postal_Code('01000-000', CountryCode.BR)).toBe(true);
    });

    it('should return false for an invalid Brazilian postal code', () => {
      expect(isValid_Postal_Code('01000000', CountryCode.BR)).toBe(false);
    });
  });

  describe('Nigeria', () => {
    it('should return true for a valid Nigerian postal code', () => {
      expect(isValid_Postal_Code('123456', CountryCode.NG)).toBe(true);
    });

    it('should return false for an invalid Nigerian postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.NG)).toBe(false);
    });
  });

  describe('Bangladesh', () => {
    it('should return true for a valid Bangladeshi postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.BD)).toBe(true);
    });

    it('should return false for an invalid Bangladeshi postal code', () => {
      expect(isValid_Postal_Code('123', CountryCode.BD)).toBe(false);
    });
  });

  describe('Russia', () => {
    it('should return true for a valid Russian postal code', () => {
      expect(isValid_Postal_Code('123456', CountryCode.RU)).toBe(true);
    });

    it('should return false for an invalid Russian postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.RU)).toBe(false);
    });
  });

  describe('Mexico', () => {
    it('should return true for a valid Mexican postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.MX)).toBe(true);
    });

    it('should return false for an invalid Mexican postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.MX)).toBe(false);
    });
  });

  describe('Japan', () => {
    it('should return true for a valid Japanese postal code', () => {
      expect(isValid_Postal_Code('123-4567', CountryCode.JP)).toBe(true);
    });

    it('should return false for an invalid Japanese postal code', () => {
      expect(isValid_Postal_Code('1234567', CountryCode.JP)).toBe(false);
    });
  });

  describe('Ethiopia', () => {
    it('should return true for a valid Ethiopian postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.ET)).toBe(true);
    });

    it('should return false for an invalid Ethiopian postal code', () => {
      expect(isValid_Postal_Code('123', CountryCode.ET)).toBe(false);
    });
  });

  describe('Philippines', () => {
    it('should return true for a valid Philippine postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.PH)).toBe(true);
    });

    it('should return false for an invalid Philippine postal code', () => {
      expect(isValid_Postal_Code('123', CountryCode.PH)).toBe(false);
    });
  });

  describe('Egypt', () => {
    it('should return true for a valid Egyptian postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.EG)).toBe(true);
    });

    it('should return false for an invalid Egyptian postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.EG)).toBe(false);
    });
  });

  describe('Vietnam', () => {
    it('should return true for a valid Vietnamese postal code', () => {
      expect(isValid_Postal_Code('123456', CountryCode.VN)).toBe(true);
    });

    it('should return false for an invalid Vietnamese postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.VN)).toBe(false);
    });
  });

  describe('Democratic Republic of the Congo', () => {
    it('should return true for a valid Congolese postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.CD)).toBe(true);
    });

    it('should return false for an invalid Congolese postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.CD)).toBe(false);
    });
  });

  describe('Turkey', () => {
    it('should return true for a valid Turkish postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.TR)).toBe(true);
    });

    it('should return false for an invalid Turkish postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.TR)).toBe(false);
    });
  });

  describe('Iran', () => {
    it('should return true for a valid Iranian postal code', () => {
      expect(isValid_Postal_Code('1234567890', CountryCode.IR)).toBe(true);
    });

    it('should return false for an invalid Iranian postal code', () => {
      expect(isValid_Postal_Code('123456789', CountryCode.IR)).toBe(false);
    });
  });

  describe('Germany', () => {
    it('should return true for a valid German postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.DE)).toBe(true);
    });

    it('should return false for an invalid German postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.DE)).toBe(false);
    });
  });

  describe('Thailand', () => {
    it('should return true for a valid Thai postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.TH)).toBe(true);
    });

    it('should return false for an invalid Thai postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.TH)).toBe(false);
    });
  });

  describe('United Kingdom', () => {
    it('should return true for a valid UK postal code', () => {
      expect(isValid_Postal_Code('W1A 1AA', CountryCode.GB)).toBe(true);
    });

    it('should return false for an invalid UK postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.GB)).toBe(false);
    });
  });

  describe('France', () => {
    it('should return true for a valid French postal code', () => {
      expect(isValid_Postal_Code('75001', CountryCode.FR)).toBe(true);
    });

    it('should return false for an invalid French postal code', () => {
      expect(isValid_Postal_Code('7500', CountryCode.FR)).toBe(false);
    });
  });

  describe('Italy', () => {
    it('should return true for a valid Italian postal code', () => {
      expect(isValid_Postal_Code('00100', CountryCode.IT)).toBe(true);
    });

    it('should return false for an invalid Italian postal code', () => {
      expect(isValid_Postal_Code('0010', CountryCode.IT)).toBe(false);
    });
  });

  describe('Tanzania', () => {
    it('should return true for a valid Tanzanian postal code', () => {
      expect(isValid_Postal_Code('12345', CountryCode.TZ)).toBe(true);
    });

    it('should return false for an invalid Tanzanian postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.TZ)).toBe(false);
    });
  });

  describe('South Africa', () => {
    it('should return true for a valid South African postal code', () => {
      expect(isValid_Postal_Code('1234', CountryCode.ZA)).toBe(true);
    });

    it('should return false for an invalid South African postal code', () => {
      expect(isValid_Postal_Code('123', CountryCode.ZA)).toBe(false);
    });
  });

  describe('Invalid Country Code', () => {
    it('should return false for an unsupported country code', () => {
      expect(isValid_Postal_Code('awea23s', 'UN' as CountryCode)).toBe(false);
    });
  });
});
