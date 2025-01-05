# validate-functions

The `validate-functions` package provides a set of utility functions for validating common identification numbers and formats. This package will be keep on updating so better look out for latest version for more validation functions.

## Installation

To install the package, use npm:

```bash
npm install validate-functions
```

## Features

- **Email Validation**: Ensures that email addresses conform to standard formats.
- **SSN Validation**: Validates U.S. Social Security Numbers based on predefined rules.
- **Aadhaar Validation**: Checks the validity of Indian Aadhaar numbers using specific patterns.
- **Credit Card Validation**: Validate using the Luhn algorithm.
- **IP Validation**: Validate IPv4 and IPv6 formats.
- **Hex Color Validation**: Validate #RRGGBB or #RGB color formats.
- **Postal/ZIP Code Validation**: Validate based on country-specific formats. It supports top 25 countries based on ISO 3166-1 alpha-2 codes namely: US, CN, IN, ID, PK, BR, NG, BD, RU, MX, JP, ET, PH, EG, VN, CD, TR, IR, DE, TH, GB, FR, IT, TZ, ZA.
- **URL Validation**: Validate structure and it supports URLs with and without protocols, and it handles query parameters and fragments.

### Identification and Financial Numbers:
1. **Credit Card Number**: Validate using the Luhn algorithm.
2. **Passport Number**: Support formats for multiple countries. (Upcoming)
3. **TIN/EIN**: Validate Taxpayer Identification Number (TIN) or Employer Identification Number (EIN). (Upcoming)

### Contact Information:
4. **Postal/ZIP Code**: Validate based on country-specific formats. It supports top 25 countries based on ISO 3166-1 alpha-2 codes namely: US, CN, IN, ID, PK, BR, NG, BD, RU, MX, JP, ET, PH, EG, VN, CD, TR, IR, DE, TH, GB, FR, IT, TZ, ZA.

### Personal Information:
5. **Date of Birth**: Validate format and ensure the person’s age falls within a reasonable range. (Upcoming)
6. **Email**: Validate email addresses which conform to standard formats.

### Internet/Network:
7. **IP Address**: Validate IPv4 and IPv6 formats.
8. **URL**: Validate structure and it supports URLs with and without protocols, and it handles query parameters and fragments.
9. **MAC Address**: Validate for networking hardware.(Upcoming)

### Document Validation:
10. **PAN (Permanent Account Number)**: For Indian tax records.(Upcoming)
11. **Social Security Number (SSN)**: Validates U.S. Social Security Numbers based on predefined rules.
12. **Social Insurance Number (SIN)**: For Canada or equivalent in other countries. (Upcoming)
13. **Aadhaar**: Checks the validity of Indian Aadhaar numbers using specific patterns.

### Formats and Patterns:
14. **File Extensions**: Validate file names/extensions (e.g., `.jpg`, `.pdf`). (Upcoming)

### Additional Utility:
15. **Boolean Strings**: Validate "true", "false", "1", "0", etc. (Upcoming)
16. **Hex Color Codes**: Validate `#RRGGBB` or `#RGB` color formats.
17. **EAN/UPC**: Validate international product codes. (Upcoming)


Usage details are available [here](./USAGE_DETAILS.md).