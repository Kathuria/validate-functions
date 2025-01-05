/**
 * A hex code, short for hexadecimal code, is a way of representing numbers using a base-16 numeral system.
 * @param color 
 * @returns 
 */
export const isValid_Hex_Color = (color: string): boolean => {
        const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
        return hexRegex.test(color);
      }
      