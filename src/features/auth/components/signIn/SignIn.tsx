import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { AuthForm } from "@features/auth/components/authForm/AuthForm";
import AuthHeader from "@features/auth/components/authHeader/AuthHeader";
import { ButtonAuthForm } from "@features/auth/components/buttonAuthForm/ButtonAuthForm";
import { SetPasswordForm } from "@features/auth/components/setPasswordForm/SetPasswordForm";
import { LinkStyle } from "@features/auth/components/signUp/signUp.style";
import { SocialAuthBlock } from "@features/auth/components/socialAuthBlock/SocialAuthBlock";
import { authService } from "@features/auth/services/auth.service";
import { AuthFormValues, ProviderType } from "@features/auth/types/auth.types";
import { emailValidation } from "@features/auth/validators/authUser";
import { useUserStore } from "@features/user/store/userStore";

import { handleAuthError } from "@shared/helpers/handleAuthError";
import { useModalStore } from "@shared/store/modalStore";
import { ServerErrorMessage } from "@shared/ui/errors/serverErrorMessage/ServerErrorMessage";
import InputField from "@shared/ui/inputs/inputField/InputField";

const SignIn = () => {
  const { setCurrentUser } = useUserStore();
  const { openModal } = useModalStore();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm<AuthFormValues>({
    criteriaMode: "all",
  });

  const handleLogin = async (data: AuthFormValues) => {
    const { email, password } = data;

    try {
      const user = await authService.loginWithEmail(email, password);
      setCurrentUser(user);
      reset();
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
        if (err.code === "auth/need-password-link") {
          openModal(<SetPasswordForm />);
          // openModal({
          //   type: "linkAccount",
          //   data: {
          //     email: error.email,
          //     pendingCredential: error.pendingCredential,
          //   },
          // });
          return;
        }

        toast.error(err.message);
      }
    }
    // } catch (error: any) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorCode);
    //   console.log(errorMessage);
    //   const email = error.customData.email;
    //   console.log(email);
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   console.log(credential);
    // }
  };

  return (
    <>
      <AuthHeader title="Welcome back">
        Don’t have an account?<LinkStyle to="/sign-up">Sign Up</LinkStyle>
      </AuthHeader>
      <AuthForm onSubmit={handleSubmit(handleLogin)}>
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
          validation={{ required: "Please. Enter your password." }}
          showToggleIcon={true}
        />
        <ServerErrorMessage errors={errors} />

        <ButtonAuthForm
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}>
          {isSubmitting ? "Loading..." : "Sign In"}
        </ButtonAuthForm>
      </AuthForm>
      <SocialAuthBlock onSocialClick={handleClick} />
    </>
  );
};

export default SignIn;
