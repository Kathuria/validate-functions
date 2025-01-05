/**
 * Electronic mail (e-mail) is a computer-based application for the exchange of messages between users.
 * @param email
 * @returns
 */
export const isValid_Email = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
