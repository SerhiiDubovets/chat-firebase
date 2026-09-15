import { useForm } from "react-hook-form";

import AuthHeader from "@features/auth/components/authHeader/AuthHeader";
import { ButtonAuthForm } from "@features/auth/components/buttonAuthForm/ButtonAuthForm";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "@features/auth/validators/authUser";
import { useSetPassword } from "@features/user/hooks/useSetPassword";

import { ServerErrorMessage } from "@shared/ui/errors/serverErrorMessage/ServerErrorMessage";
import InputField from "@shared/ui/inputs/inputField/InputField";

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
          showToggleIcon={true}
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
          showToggleIcon={true}
        />
        <ServerErrorMessage errors={errors} />

        <ButtonAuthForm type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add password"}
        </ButtonAuthForm>
      </SetPasswordFormStyle>
    </>
  );
};
