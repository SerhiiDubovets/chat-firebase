import { FirebaseError } from "firebase/app";

export const getAuthErrorMessage = (code?: string) => {
  switch (code) {
    case "auth/user-not-found":
      return "User not found. Please sign up.";

    case "auth/invalid-credential":
      return "Incorrect email or password.";

    case "auth/email-already-in-use":
      return "This email is already in use.";

    case "auth/popup-closed-by-user":
      return "Login popup was closed.";

    case "auth/need-password-link":
      return "Need password link";

    case "auth/account-exists-with-different-credential":
      return "Account exists with another provider.";

    default:
      return "Something went wrong. Try again.";
  }
};

export const handleAuthError = (err: FirebaseError | any) => {
  if (err.code === "user-data-missing") {
    return {
      code: err.code,
      message: "Account exists but profile is missing. Please sign up again.",
    };
  }

  return {
    code: err.code,
    message: getAuthErrorMessage(err.code),
  };
};
