import { EmailAuthProvider, getAuth, linkWithCredential } from "firebase/auth";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { toast } from "react-toastify";

import { SetPasswordFormValues } from "@/components/forms/setPasswordForm/setPasswordForm.types";
import { useModalStore } from "@/store/modalStore";
import { useUserStore } from "@/store/userStore";

export const useSetPassword = (
  setError: UseFormSetError<SetPasswordFormValues>,
  reset: UseFormReset<SetPasswordFormValues>
) => {
  const { closeModal } = useModalStore();
  const { currentUser } = useUserStore();

  return async (data: SetPasswordFormValues) => {
    if (!currentUser?.email) return;

    const credential = EmailAuthProvider.credential(
      currentUser.email,
      data.password
    );
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        setError("root.serverError" as any, {
          type: "no-user",
          message: "No authenticated user found.",
        });
        return;
      }

      await linkWithCredential(user, credential);
      toast.success("Password added successfully.");
      reset();
      closeModal();
    } catch (err: any) {
      const errorCode = err.code;

      let message = "";
      switch (errorCode) {
        case "auth/email-already-in-use":
          message = "Something went wrong. Unable to save password.";
          break;

        case "auth/weak-password":
          message = "The password is too weak.";
          break;

        case "auth/invalid-credential":
          message = "Invalid credentials.";
          break;

        case "auth/provider-already-linked":
          message = "Account already linked.";
          break;

        default:
          message = err.message || "An unknown error occurred.";
          break;
      }

      setError("root.serverError" as any, {
        type: errorCode,
        message,
      });
      if (errorCode !== "auth/email-already-in-use") toast.error(err.message);
    }
  };
};
