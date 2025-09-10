import {
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { ButtonAuthForm } from "@/components/buttons/buttonAuthForm/ButtonAuthForm";

import { ServerErrorMessage } from "@/components/errors/serverErrorMessage/ServerErrorMessage";
import { AuthForm } from "@/components/forms/authForm/AuthForm";
import AuthHeader from "@/components/headlines/authHeader/AuthHeader";
import InputField from "@/components/inputField/InputField";

import { SocialAuthBlock } from "@/components/socialAuthBlock/SocialAuthBlock";
import { auth, db } from "@/lib/firebase";
import { useUserStore } from "@/store/userStore";
import { SignUpFormValues } from "@/types/auth.types";
import { emailValidation } from "@/validators/authUser";

import { LinkStyle } from "../signUp/signUp.style";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm<SignUpFormValues>({
    criteriaMode: "all",
  });
  const { setCurrentUser, fetchUserInfo } = useUserStore();

  const handleLogin = async (data: SignUpFormValues) => {
    const { email, password } = data;
    try {
      console.log("auth.app.name", auth.app.name);
      console.log(auth);
      console.log("auth.currentUser?.email", auth.currentUser);
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      const methods = await fetchSignInMethodsForEmail(
        auth,
        "sergio.dubovets@gmail.com"
      );
      console.log(signInMethods);
      console.log(methods);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      const errorCode = err.code;
      console.log(errorCode);

      if (errorCode === "auth/invalid-credential") {
        setError("root.serverError", {
          type: errorCode,
          message: "Incorrect email or password. Please try again.",
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
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      console.log(signInMethods);

      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        const newUser = {
          username: displayName,
          email: email,
          avatar: photoURL || null,
          id: userId,
          blocked: [],
          about: "",
        };

        await setDoc(userRef, newUser);
        await setDoc(doc(db, "userchats", userId), { chats: [] });
        setCurrentUser(newUser);
      } else {
        await fetchUserInfo(userId);
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
          showToggle={true}
        />
        <ServerErrorMessage errors={errors} />

        <ButtonAuthForm type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Sign In"}
        </ButtonAuthForm>
      </AuthForm>
      <SocialAuthBlock onSocialClick={handleClick} />
    </>
  );
};

export default SignIn;
