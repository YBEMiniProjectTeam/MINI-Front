export function isEmailValid(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
export function isPasswordValid(password: string): boolean {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  return regex.test(password);
}
export function isBirthdayValid(birth: string): boolean {
  const regex = /^[0-9]{8}$/;
  return regex.test(birth);
}
