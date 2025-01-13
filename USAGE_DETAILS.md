## Usage Details

- **isValid_Email**

```typescript
import { isValid_Email } from 'validate-functions/email';

const email = '<a href="mailto:example@example.com">example@example.com</a>';
console.log(isValid_Email(email)); // Output: true if valid, false otherwise
```

- **isValid_SSN**

```typescript
import { isValid_SSN } from 'validate-functions/ssn';

const ssn = '123-45-6789';
console.log(isValid_SSN(ssn)); // Output: true if valid, false otherwise
```

- **isValid_Aadhaar_Number**

```typescript
import { isValid_Aadhaar_Number } from 'validate-functions/aadhaar';

const aadhaarNumber = '1234 5678 9012';
console.log(isValid_Aadhaar_Number(aadhaarNumber)); // Output: true if valid, false otherwise
```

- **isValid_Credit_Card**

```typescript
import { isValid_Credit_Card } from 'validate-functions/credit-card';
valid Visa card number
console.log(isValid_Credit_Card(creditCardNumber)); // Output: true if valid, false otherwise
```

- **isValid_IPv4**

```typescript
import { isValid_IPv4 } from 'validate-functions/ip';

const ipv4Address = '192.168.1.1';
console.log(isValid_IPv4(ipv4Address)); // Output: true if valid, false otherwise
```

- **isValid_IPv6**

```typescript
import { isValid_IPv6 } from 'validate-functions/ip';

const ipv6Address = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
console.log(isValid_IPv6(ipv6Address)); // Output: true if valid, false otherwise
```

- **isValid_Hex_Color**

```typescript
import { isValid_Hex_Color } from 'validate-functions/hex-code';

console.log(isValid_Hex_Color(hexColor)); // Output: true if valid, false otherwise

console.log(isValid_Hex_Color(hexColor6)); // Output: true if valid, false otherwise
```

- **isValid_Postal_Code**

```typescript
import { isValid_Postal_Code, CountryCode } from 'validate-functions/postal';

// India
const indianPostalCode = '110001';
console.log(isValid_Postal_Code(indianPostalCode, CountryCode.IN)); // Output: true
```

- **isValid_URL**

```typescript
import { isValid_URL } from 'validate-functions/url';

const urlWithQuery = 'http://example.com?name=value';
console.log(isValid_URL(urlWithQuery)); // Output: true
```

- **isValid_File_Extension**

```typescript
import { isValid_File_Extension } from 'validate-functions/file-extension';

const fileName = 'document.pdf';
const allowedExtensions = ['pdf', 'doc', 'txt'];
console.log(isValid_File_Extension(fileName, allowedExtensions)); // Output: true if the extension is valid, false otherwise
```

- **isValid_Base64**

```typescript
import { isValid_Base64 } from 'validate-functions/base64';

const base64String = 'U29mdHdhcmUgRW5naW5lZXJpbmc=';
console.log(isValid_Base64(base64String)); // Output: true if valid, false otherwise
```

- **isValid_EAN_UPC**

```typescript
import { isValid_EAN_UPC } from 'validate-functions/ean-uac-code';

const eanUpcCode = '123456789012';
console.log(isValid_EAN_UPC(eanUpcCode)); // Output: true if valid, false otherwise
```

- **isValid_MAC_Address**

```typescript
import { isValid_MAC_Address } from 'validate-functions/mac-address';

const macAddress = '01:23:45:67:89:AB';
console.log(isValid_MAC_Address(macAddress)); // Output: true if valid, false otherwise
```

- **isValid_PAN**

```typescript
import { isValid_PAN } from 'validate-functions/pan';

const panNumber = 'ABCDE1234F';
console.log(isValid_PAN(panNumber)); // Output: true if valid, false otherwise
```

- **isValid_SIN**

```typescript
import { isValid_SIN } from 'validate-functions/sin';

const sinNumber = '123 456 782';
console.log(isValid_SIN(sinNumber)); // Output: true if valid, false otherwise
```

- **isValid_TIN**

```typescript
import { isValid_TIN, CountryCode } from 'validate-functions/tin';

// Example for USA
const einNumber = '12-3456789';
console.log(isValid_TIN(einNumber, CountryCode.USA)); // Output: true if valid, false otherwise
```

- **isValid_Passport_Number**

```typescript
import { isValid_Passport_Number, CountryCode } from 'validate-functions/passport-number';

// Example for USA
const passportNumber = 'A1234567';
console.log(isValid_Passport_Number(passportNumber, CountryCode.USA)); // Output: true if valid, false otherwise
```