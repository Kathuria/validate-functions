import { isValid_File_Extension } from '../file-extension';

describe('File Extension Validation', () => {
  it('should return true for a valid file extension', () => {
    const fileName = 'document.pdf';
    const allowedExtensions = ['pdf', 'doc', 'txt'];
    expect(isValid_File_Extension(fileName, allowedExtensions)).toBe(true);
  });

  it('should return false for an invalid file extension', () => {
    const fileName = 'image.jpeg';
    const allowedExtensions = ['pdf', 'doc', 'txt'];
    expect(isValid_File_Extension(fileName, allowedExtensions)).toBe(false);
  });

  it('should return false for a file with no extension', () => {
    const fileName = 'file';
    const allowedExtensions = ['pdf', 'doc', 'txt'];
    expect(isValid_File_Extension(fileName, allowedExtensions)).toBe(false);
  });

  it('should return true for a valid file extension with mixed case', () => {
    const fileName = 'presentation.PPT';
    const allowedExtensions = ['ppt', 'doc', 'txt'];
    expect(isValid_File_Extension(fileName, allowedExtensions)).toBe(true);
  });

  it('should return false for an empty file name', () => {
    const fileName = '';
    const allowedExtensions = ['pdf', 'doc', 'txt'];
    expect(isValid_File_Extension(fileName, allowedExtensions)).toBe(false);
  });

  it('should return false for an empty allowed extensions list', () => {
    const fileName = 'document.pdf';
    const allowedExtensions: string[] = [];
    expect(isValid_File_Extension(fileName, allowedExtensions)).toBe(false);
  });
});
