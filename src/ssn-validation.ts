
/**
* Function to validate SSN based on defined rules
*/
export const isValid_SSN = (value: string): boolean => {
const invalidSSPatterns = ['000','666'];
        if ((value.length >= 1 && value. length !== 9) || value[0] === '9' || invalidSSPatterns.includes(value.slice(0, 3)) || value.slice(3, 5) === '00' || value.slice(5, 9) === '0000') {
                return false;
        } else {
                return true;
        }
}