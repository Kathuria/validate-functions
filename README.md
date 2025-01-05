# validate-functions

The `validate-functions` package provides a set of utility functions for validating common identification numbers and formats.

## Installation

To install the package, use npm:

```bash
npm install validate-functions
```

More usage details are available [here](./USAGE_DETAILS.md).

## Features
This package includes various categorised validators which can be helppful for various developments.

### Identification and Financial Numbers:
1. **Credit Card Number**: Validate using the Luhn algorithm.
2. **Passport Number**: Support formats for multiple countries. (Upcoming)
3. **Aadhaar**: Validites Indian Identity numbers using specific patterns.
4. **TIN/EIN**: Validate Taxpayer Identification Number (TIN) or Employer Identification Number (EIN). (Upcoming)

### Contact Information:
5. **Postal/ZIP Code**: Validate based on country-specific formats. It supports top 25 countries based on ISO 3166-1 alpha-2 codes namely: US, CN, IN, ID, PK, BR, NG, BD, RU, MX, JP, ET, PH, EG, VN, CD, TR, IR, DE, TH, GB, FR, IT, TZ, ZA.

### Personal Information:
6. **Date of Birth**: Validate format and ensure the person’s age falls within a reasonable range. (Upcoming)
7. **Email**: Validate email addresses which conform to standard formats.

### Internet/Network:
8. **IP Address**: Validate IPv4 and IPv6 formats.
9. **URL**: Validate structure and it supports URLs with and without protocols, and it handles query parameters and fragments.
10. **MAC Address**: Validate for networking hardware.(Upcoming)

### Document Validation:
11. **PAN (Permanent Account Number)**: For Indian tax records.(Upcoming)
12. **Social Security Number (SSN)**: Validates U.S. Social Security Numbers based on predefined rules.
13. **Social Insurance Number (SIN)**: For Canada or equivalent in other countries. (Upcoming)

### Formats and Patterns:
14. **File Extensions**: Validate file names/extensions (e.g., `.jpg`, `.pdf`). (Upcoming)

### Additional Utility:
15. **Boolean Strings**: Validate "true", "false", "1", "0", etc. (Upcoming)
16. **Hex Color Codes**: Validate `#RRGGBB` or `#RGB` color formats.
17. **EAN/UPC**: Validate international product codes. (Upcoming)
