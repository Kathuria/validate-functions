/**
 *
 * @param fileName
 * @param allowedExtensions
 * @returns
 */
export const isValid_File_Extension = (
  fileName: string,
  allowedExtensions: string[]
): boolean => {
  const extension = fileName.split('.').pop()?.toLowerCase() || '';
  return allowedExtensions.includes(extension);
};
