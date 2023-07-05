import {
  checksCountToStrength,
  hasDigits,
  hasLetters,
  hasSymbols,
  PasswordStrength,
} from "./passwordStrengthUtils";

const PASSWORD_MIN_CHARS_COUNT = 8;

export const getPasswordStrength = (password: string): PasswordStrength => {
  if (!password.length) {
    return PasswordStrength.None;
  }

  if (password.length < PASSWORD_MIN_CHARS_COUNT) {
    return PasswordStrength.Short;
  }

  const passwordChecksCount = [
    hasLetters(password),
    hasDigits(password),
    hasSymbols(password),
  ].filter(Boolean).length;

  return checksCountToStrength[passwordChecksCount];
};
