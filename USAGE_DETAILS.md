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
