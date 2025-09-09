import { useForm } from "react-hook-form";

import { ButtonAuthForm } from "@/components/buttons/buttonAuthForm/ButtonAuthForm";
import { ServerErrorMessage } from "@/components/errors/serverErrorMessage/ServerErrorMessage";
import AuthHeader from "@/components/headlines/authHeader/AuthHeader";
import InputField from "@/components/inputField/InputField";
import { useSetPassword } from "@/hooks/useSetPassword";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "@/validators/authUser";
import { SetPasswordFormStyle } from "./setPasswordForm.style";
import { SetPasswordFormValues } from "./setPasswordForm.types";

export const SetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,

    formState: { errors, isSubmitting },
  } = useForm<SetPasswordFormValues>({
    criteriaMode: "all",
  });

  const handleSetPassword = useSetPassword(setError, reset);

  return (
    <>
      <AuthHeader title="Please, set your password!" />
      <SetPasswordFormStyle onSubmit={handleSubmit(handleSetPassword)}>
        <InputField
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="*******"
          autoComplete="current-password"
          register={register}
          errors={errors}
          validation={passwordValidation}
          showToggle={true}
        />
        <InputField
          label="Password again"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="*******"
          autoComplete="current-password"
          register={register}
          errors={errors}
          validation={confirmPasswordValidation(watch)}
          showToggle={true}
        />
        <ServerErrorMessage errors={errors} />

        <ButtonAuthForm type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add password"}
        </ButtonAuthForm>
      </SetPasswordFormStyle>
    </>
  );
};
