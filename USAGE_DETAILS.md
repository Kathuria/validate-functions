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

const creditCardNumber = '4539 1488 0343 6467'; // Example of a valid Visa card number
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

const hexColor = '#abc'; // Example of a valid 3-digit hex color
console.log(isValid_Hex_Color(hexColor)); // Output: true if valid, false otherwise

const hexColor6 = '#abcdef'; // Example of a valid 6-digit hex color
console.log(isValid_Hex_Color(hexColor6)); // Output: true if valid, false otherwise
```