/**
 * Aadhaar is a twelve-digit unique identity number that can be obtained voluntarily by all residents of India, based on their biometrics and demographic data.
 * @param aadhaar_number
 * @returns
 */
export const isValid_Aadhaar_Number = (aadhaar_number: string): boolean => {
  // Regex to check valid aadhaar_number
  let regex = new RegExp(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/);

  // if aadhaar_number is empty return false
  if (aadhaar_number == null) {
    return false;
  }

  // Return true if the aadhaar_number matched the ReGex
  return regex.test(aadhaar_number);
};
