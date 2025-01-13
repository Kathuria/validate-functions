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
2. **Passport Number**: Support formats for multiple countries. 
3. **Aadhaar**: Validites Indian Identity numbers using specific patterns.
4. **TIN/EIN**: Validate Taxpayer Identification Number (TIN) or Employer Identification Number (EIN).

### Contact Information:
5. **Postal/ZIP Code**: Validate based on country-specific formats. It supports top 25 countries based on ISO 3166-1 alpha-2 codes namely: US, CN, IN, ID, PK, BR, NG, BD, RU, MX, JP, ET, PH, EG, VN, CD, TR, IR, DE, TH, GB, FR, IT, TZ, ZA.

### Personal Information:
6. **Email**: Validate email addresses which conform to standard formats.

### Internet/Network:
7. **IP Address**: Validate IPv4 and IPv6 formats.
8. **URL**: Validate structure and it supports URLs with and without protocols, and it handles query parameters and fragments.
9. **MAC Address**: Validate for networking hardware.

### Document Validation:
10. **PAN (Permanent Account Number)**: For Indian tax records.
11. **Social Security Number (SSN)**: Validates U.S. Social Security Numbers based on predefined rules.
12. **Social Insurance Number (SIN)**: For Canada or equivalent in other countries.

### Formats and Patterns:
13. **File Extensions**: Validate file names/extensions (e.g., `.jpg`, `.pdf`).

### Additional Utility:
14. **Hex Color Codes**: Validate `#RRGGBB` or `#RGB` color formats.
15. **EAN/UPC**: Validate international product codes.
16. **Base64**: Validate for Base64 encoded string.
