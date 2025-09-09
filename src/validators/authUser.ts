import { RegisterOptions, UseFormWatch } from "react-hook-form";

import { SetPasswordFormValues } from "@/components/forms/setPasswordForm/setPasswordForm.types";

export interface UsernameValidationValues {
  username: string;
}

export interface EmailValidationValues {
  email: string;
}

export interface PasswordValidationValues {
  password: string;
}

export const usernameValidation: RegisterOptions<
  UsernameValidationValues,
  "username"
> = {
  required: "Please enter your name.",
  minLength: {
    value: 3,
    message: "Name must be at least 3 characters.",
  },
  maxLength: {
    value: 20,
    message: "Name must be no more then 20 characters.",
  },

  pattern: {
    value: /^[A-Za-z\s]+$/i,
    message: "Letters and spaces only.",
  },
};

export const emailValidation: RegisterOptions<EmailValidationValues, "email"> =
  {
    required: "Please enter your email.",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      message: "Invalid email format.",
    },
  };

export const passwordValidation: RegisterOptions<
  PasswordValidationValues,
  "password"
> = {
  required: "Please enter your password.",
  minLength: {
    value: 5,
    message: "Password must be at least 5 characters.",
  },
  //for a more secret password
  // pattern: {
  //   value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,}$/,
  //   message:
  //     "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character (like - _ @ $ ! % * ? &).",
  // },
};

export function validateAvatarFile(file: File | null) {
  const maxSizeInMB = 2;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  if (!file) return "Please select an image.";
  if (!allowedTypes.includes(file.type))
    return "Invalid file type. Use JPEG, PNG, WEBP, or GIF.";
  if (file.size > maxSizeInBytes)
    return `File too big. Max size is ${maxSizeInMB}MB.`;

  return null;
}

export const confirmPasswordValidation = (
  watch: UseFormWatch<SetPasswordFormValues>
) => ({
  required: "Please confirm your password.",
  validate: (value: string) =>
    value === watch("password") || "Passwords do not match.",
});
