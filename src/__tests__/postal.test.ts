import { isValid_Postal_Code, PostalCountryCode } from '../postal';

describe('Postal Code Validation', () => {
  describe('United States', () => {
    it('should return true for a valid 5-digit US postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.US)).toBe(true);
    });

    it('should return true for a valid 9-digit US postal code', () => {
      expect(isValid_Postal_Code('12345-6789', PostalCountryCode.US)).toBe(
        true
      );
    });

    it('should return false for an invalid US postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.US)).toBe(false);
    });
  });

  describe('China', () => {
    it('should return true for a valid Chinese postal code', () => {
      expect(isValid_Postal_Code('100000', PostalCountryCode.CN)).toBe(true);
    });

    it('should return false for an invalid Chinese postal code', () => {
      expect(isValid_Postal_Code('10000', PostalCountryCode.CN)).toBe(false);
    });
  });

  describe('India', () => {
    it('should return true for a valid Indian postal code', () => {
      expect(isValid_Postal_Code('110001', PostalCountryCode.IN)).toBe(true);
    });

    it('should return false for an invalid Indian postal code', () => {
      expect(isValid_Postal_Code('11000', PostalCountryCode.IN)).toBe(false);
    });
  });

  describe('Indonesia', () => {
    it('should return true for a valid Indonesian postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.ID)).toBe(true);
    });

    it('should return false for an invalid Indonesian postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.ID)).toBe(false);
    });
  });

  describe('Pakistan', () => {
    it('should return true for a valid Pakistani postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.PK)).toBe(true);
    });

    it('should return false for an invalid Pakistani postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.PK)).toBe(false);
    });
  });

  describe('Brazil', () => {
    it('should return true for a valid Brazilian postal code', () => {
      expect(isValid_Postal_Code('01000-000', PostalCountryCode.BR)).toBe(true);
    });

    it('should return false for an invalid Brazilian postal code', () => {
      expect(isValid_Postal_Code('01000000', PostalCountryCode.BR)).toBe(false);
    });
  });

  describe('Nigeria', () => {
    it('should return true for a valid Nigerian postal code', () => {
      expect(isValid_Postal_Code('123456', PostalCountryCode.NG)).toBe(true);
    });

    it('should return false for an invalid Nigerian postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.NG)).toBe(false);
    });
  });

  describe('Bangladesh', () => {
    it('should return true for a valid Bangladeshi postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.BD)).toBe(true);
    });

    it('should return false for an invalid Bangladeshi postal code', () => {
      expect(isValid_Postal_Code('123', PostalCountryCode.BD)).toBe(false);
    });
  });

  describe('Russia', () => {
    it('should return true for a valid Russian postal code', () => {
      expect(isValid_Postal_Code('123456', PostalCountryCode.RU)).toBe(true);
    });

    it('should return false for an invalid Russian postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.RU)).toBe(false);
    });
  });

  describe('Mexico', () => {
    it('should return true for a valid Mexican postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.MX)).toBe(true);
    });

    it('should return false for an invalid Mexican postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.MX)).toBe(false);
    });
  });

  describe('Japan', () => {
    it('should return true for a valid Japanese postal code', () => {
      expect(isValid_Postal_Code('123-4567', PostalCountryCode.JP)).toBe(true);
    });

    it('should return false for an invalid Japanese postal code', () => {
      expect(isValid_Postal_Code('1234567', PostalCountryCode.JP)).toBe(false);
    });
  });

  describe('Ethiopia', () => {
    it('should return true for a valid Ethiopian postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.ET)).toBe(true);
    });

    it('should return false for an invalid Ethiopian postal code', () => {
      expect(isValid_Postal_Code('123', PostalCountryCode.ET)).toBe(false);
    });
  });

  describe('Philippines', () => {
    it('should return true for a valid Philippine postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.PH)).toBe(true);
    });

    it('should return false for an invalid Philippine postal code', () => {
      expect(isValid_Postal_Code('123', PostalCountryCode.PH)).toBe(false);
    });
  });

  describe('Egypt', () => {
    it('should return true for a valid Egyptian postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.EG)).toBe(true);
    });

    it('should return false for an invalid Egyptian postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.EG)).toBe(false);
    });
  });

  describe('Vietnam', () => {
    it('should return true for a valid Vietnamese postal code', () => {
      expect(isValid_Postal_Code('123456', PostalCountryCode.VN)).toBe(true);
    });

    it('should return false for an invalid Vietnamese postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.VN)).toBe(false);
    });
  });

  describe('Democratic Republic of the Congo', () => {
    it('should return true for a valid Congolese postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.CD)).toBe(true);
    });

    it('should return false for an invalid Congolese postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.CD)).toBe(false);
    });
  });

  describe('Turkey', () => {
    it('should return true for a valid Turkish postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.TR)).toBe(true);
    });

    it('should return false for an invalid Turkish postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.TR)).toBe(false);
    });
  });

  describe('Iran', () => {
    it('should return true for a valid Iranian postal code', () => {
      expect(isValid_Postal_Code('1234567890', PostalCountryCode.IR)).toBe(
        true
      );
    });

    it('should return false for an invalid Iranian postal code', () => {
      expect(isValid_Postal_Code('123456789', PostalCountryCode.IR)).toBe(
        false
      );
    });
  });

  describe('Germany', () => {
    it('should return true for a valid German postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.DE)).toBe(true);
    });

    it('should return false for an invalid German postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.DE)).toBe(false);
    });
  });

  describe('Thailand', () => {
    it('should return true for a valid Thai postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.TH)).toBe(true);
    });

    it('should return false for an invalid Thai postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.TH)).toBe(false);
    });
  });

  describe('United Kingdom', () => {
    it('should return true for a valid UK postal code', () => {
      expect(isValid_Postal_Code('W1A 1AA', PostalCountryCode.GB)).toBe(true);
    });

    it('should return false for an invalid UK postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.GB)).toBe(false);
    });
  });

  describe('France', () => {
    it('should return true for a valid French postal code', () => {
      expect(isValid_Postal_Code('75001', PostalCountryCode.FR)).toBe(true);
    });

    it('should return false for an invalid French postal code', () => {
      expect(isValid_Postal_Code('7500', PostalCountryCode.FR)).toBe(false);
    });
  });

  describe('Italy', () => {
    it('should return true for a valid Italian postal code', () => {
      expect(isValid_Postal_Code('00100', PostalCountryCode.IT)).toBe(true);
    });

    it('should return false for an invalid Italian postal code', () => {
      expect(isValid_Postal_Code('0010', PostalCountryCode.IT)).toBe(false);
    });
  });

  describe('Tanzania', () => {
    it('should return true for a valid Tanzanian postal code', () => {
      expect(isValid_Postal_Code('12345', PostalCountryCode.TZ)).toBe(true);
    });

    it('should return false for an invalid Tanzanian postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.TZ)).toBe(false);
    });
  });

  describe('South Africa', () => {
    it('should return true for a valid South African postal code', () => {
      expect(isValid_Postal_Code('1234', PostalCountryCode.ZA)).toBe(true);
    });

    it('should return false for an invalid South African postal code', () => {
      expect(isValid_Postal_Code('123', PostalCountryCode.ZA)).toBe(false);
    });
  });

  describe('Invalid Country Code', () => {
    it('should return false for an unsupported country code', () => {
      expect(isValid_Postal_Code('awea23s', 'UN' as PostalCountryCode)).toBe(
        false
      );
    });
  });
});
