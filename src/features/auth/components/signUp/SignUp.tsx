import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { AuthForm } from "@features/auth/components/authForm/AuthForm";
import AuthHeader from "@features/auth/components/authHeader/AuthHeader";
import { ButtonAuthForm } from "@features/auth/components/buttonAuthForm/ButtonAuthForm";
import { SocialAuthBlock } from "@features/auth/components/socialAuthBlock/SocialAuthBlock";
import { authService } from "@features/auth/services/auth.service";
import { AuthFormValues, ProviderType } from "@features/auth/types/auth.types";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "@features/auth/validators/authUser";
import { useAvatar } from "@features/user/hooks/useAvatar";
import { useUserStore } from "@features/user/store/userStore";

import { handleAuthError } from "@shared/helpers/handleAuthError";
import { ErrorMessageTitle } from "@shared/ui/errors/errorMessageTitle/ErrorMessageTitle";
import { ServerErrorMessage } from "@shared/ui/errors/serverErrorMessage/ServerErrorMessage";
import InputField from "@shared/ui/inputs/inputField/InputField";

import * as S from "./signUp.style";

const SignUp = () => {
  const { setCurrentUser } = useUserStore();
  const { avatar, handleAvatarChange, error } = useAvatar();
  const {
    register,
    handleSubmit,
    setError,
    reset,

    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm<AuthFormValues>({
    criteriaMode: "all",
  });

  // const provider = new GoogleAuthProvider();
  // provider.setCustomParameters({
  //   prompt: "select_account",
  // });

  const handleClick = async (providerType: ProviderType) => {
    try {
      const result = await authService.authWithProvider(providerType);

      if (result.status === "SUCCESS") {
        setCurrentUser(result.user);
      }

      if (result.status === "NEED_LINK") {
        console.log("Link required:", result);
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        const { code, message } = handleAuthError(err);

        setError("root.serverError", {
          type: code,
          message,
        });
        toast.error(message);
      }
    }
  };

  const handleRegister = async (data: AuthFormValues) => {
    const { username, email, password } = data;

    try {
      const result = await authService.registerUser({
        username,
        email,
        password,
        avatarFile: avatar.file,
      });

      if (result.status === "SUCCESS") {
        setCurrentUser(result.user);
        reset();
        toast.success("Account created!");
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        const { code, message } = handleAuthError(err);

        setError("root.serverError", {
          type: code,
          message,
        });
        toast.error(message);
      }
    }
  };

  return (
    <>
      <AuthHeader title="Create an Account">
        Already have an account?<S.LinkStyle to="/sign-in">Sign In</S.LinkStyle>
      </AuthHeader>
      <AuthForm onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="file">
          <S.AvatarImg size="50px" url={avatar.url} alt="User avatar" />
        </label>
        <S.InputFile type="file" id="file" onChange={handleAvatarChange} />
        {error && <ErrorMessageTitle>{error}</ErrorMessageTitle>}
        <InputField
          label="Username"
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          autoComplete="username"
          register={register}
          errors={errors}
          touched={touchedFields}
          isSubmitted={isSubmitted}
          validation={usernameValidation}
        />
        <InputField
          label="Email address"
          id="email"
          name="email"
          type="text"
          placeholder="username@gmail.com"
          autoComplete="email"
          register={register}
          errors={errors}
          touched={touchedFields}
          isSubmitted={isSubmitted}
          validation={emailValidation}
        />
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
        <ServerErrorMessage errors={errors} />
        <ButtonAuthForm
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}>
          {isSubmitting ? "Registering..." : "Sign Up"}
        </ButtonAuthForm>
      </AuthForm>
      <SocialAuthBlock onSocialClick={handleClick} />
    </>
  );
};

export default SignUp;
