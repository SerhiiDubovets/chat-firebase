import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { ButtonAuthForm } from "@/components/buttons/buttonAuthForm/ButtonAuthForm";
import { ErrorMessageTitle } from "@/components/errors/errorMessageTitle/ErrorMessageTitle";
import { ServerErrorMessage } from "@/components/errors/serverErrorMessage/ServerErrorMessage";
import { AuthForm } from "@/components/forms/authForm/AuthForm";
import AuthHeader from "@/components/headlines/authHeader/AuthHeader";
import InputField from "@/components/inputField/InputField";
import { SocialAuthBlock } from "@/components/socialAuthBlock/SocialAuthBlock";
import { useAvatar } from "@/hooks/useAvatar";
import { registerUser } from "@/lib/authService";
import { auth, db } from "@/lib/firebase";
import { useUserStore } from "@/store/userStore";

import { SignUpFormValues } from "@/types/auth.types";

import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "@/validators/authUser";
import { AvatarImgStyle, LinkStyle } from "./signUp.style";

const SignUp = () => {
  const { setCurrentUser } = useUserStore();
  const { avatar, handleAvatarChange, error } = useAvatar();
  const {
    register,
    handleSubmit,
    setError,
    reset,

    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm<SignUpFormValues>({
    criteriaMode: "all",
  });
  // const provider = new GoogleAuthProvider();
  // provider.setCustomParameters({
  //   prompt: "select_account",
  // });

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const providerType = e.currentTarget.dataset.provider;
    let provider;
    switch (providerType) {
      case "google":
        provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        break;
      case "github":
        provider = new GithubAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        break;
      case "facebook":
        provider = new FacebookAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        break;
      default:
        return;
    }
    // const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const userId = user.uid;
      const { displayName, email, photoURL } = user;

      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        const newUser = {
          username: displayName,
          email: email,
          avatarFile: photoURL || null,
          id: userId,
          blocked: [],
          about: "",
        };

        await setDoc(userRef, newUser);
        await setDoc(doc(db, "userchats", userId), { chats: [] });
      } else {
        console.log("Пользователь уже существует, просто логинимся");
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      const email = error.customData.email;
      console.log(email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    }
  };

  const handleRegister = async (data: SignUpFormValues) => {
    const { username, email, password } = data;

    try {
      const newUser = await registerUser({
        username,
        email,
        password,
        avatarFile: avatar?.file || null,
      });

      setCurrentUser(newUser);

      toast.success("Account created!");
    } catch (err: any) {
      const errorCode = err.code;
      if (errorCode === "auth/email-already-in-use") {
        setError("root.serverError", {
          type: errorCode,
          message: "This account already in use.",
        });
      } else {
        setError("root.serverError", {
          type: errorCode,
        });
        toast.error(err.message);
      }
    } finally {
      reset();
    }
  };

  return (
    <>
      <AuthHeader title="Create an Account">
        Already have an account?<LinkStyle to="/sign-in">Sign In</LinkStyle>
      </AuthHeader>
      <AuthForm onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="file">
          <AvatarImgStyle size="50px" url={avatar.url} />
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
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
          showToggle={true}
        />
        <ServerErrorMessage errors={errors} />
        <ButtonAuthForm type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Sign Up"}
        </ButtonAuthForm>
      </AuthForm>
      <SocialAuthBlock onSocialClick={handleClick} />
    </>
  );
};

export default SignUp;
