import { REGEX_DIGITS, REGEX_LETTERS, REGEX_SYMBOLS } from "../../vars/Regexs";

export enum PasswordStrength {
  None,
  Short,
  Easy,
  Medium,
  Hard,
}

export enum PasswordStrengthColor {
  Gray = "gray",
  Red = "red",
  Yellow = "yellow",
  Green = "green",
}

export type PasswordStrengthBarConfig = [
  PasswordStrengthColor,
  PasswordStrengthColor,
  PasswordStrengthColor,
];

export const passwordStrengthToBarConfig: Record<
  PasswordStrength,
  PasswordStrengthBarConfig
> = {
  [PasswordStrength.None]: [
    PasswordStrengthColor.Gray,
    PasswordStrengthColor.Gray,
    PasswordStrengthColor.Gray,
  ],
  [PasswordStrength.Short]: [
    PasswordStrengthColor.Red,
    PasswordStrengthColor.Red,
    PasswordStrengthColor.Red,
  ],
  [PasswordStrength.Easy]: [
    PasswordStrengthColor.Red,
    PasswordStrengthColor.Gray,
    PasswordStrengthColor.Gray,
  ],
  [PasswordStrength.Medium]: [
    PasswordStrengthColor.Yellow,
    PasswordStrengthColor.Yellow,
    PasswordStrengthColor.Gray,
  ],
  [PasswordStrength.Hard]: [
    PasswordStrengthColor.Green,
    PasswordStrengthColor.Green,
    PasswordStrengthColor.Green,
  ],
};

export const checksCountToStrength: Record<number, PasswordStrength> = {
  0: PasswordStrength.None,
  1: PasswordStrength.Easy,
  2: PasswordStrength.Medium,
  3: PasswordStrength.Hard,
};

export const hasLetters = (password: string): boolean => {
  return REGEX_LETTERS.test(password);
};

export const hasDigits = (password: string): boolean => {
  return REGEX_DIGITS.test(password);
};

export const hasSymbols = (password: string): boolean => {
  return REGEX_SYMBOLS.test(password);
};
