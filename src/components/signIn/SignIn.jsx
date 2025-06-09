import { useState } from "react";

import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase.js";

import { useForm } from "react-hook-form";

import FacebookIcon from "@/img/signIn/facebook.svg";
import GitIcon from "@/img/signIn/git.svg";
import GoogleIcon from "@/img/signIn/google.svg";

import {
  FormStyle,
  TitleStyle,
  SubTitle,
  LinkStyle,
  SignInStyle,
  BlockAside,
  Separator,
  ButtonIcon,
  AsideStyle,
  FormBtn,
} from "./signIn.style";
import InputField from "../inputField/InputField";
import { ErrorMessageTitle } from "@/components/errorMessage/ErrorMessage";

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm({
    criteriaMode: "all",
  });

  const handleLogin = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
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
      setLoading(false);
    }
  };

  return (
    <SignInStyle>
      <TitleStyle>Welcome back</TitleStyle>
      <SubTitle>
        Don’t have an account?
        <LinkStyle>Sign UP</LinkStyle>
      </SubTitle>
      <FormStyle onSubmit={handleSubmit(handleLogin)}>
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
          validation={{
            required: "Please. Enter your email.",
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "This input is email only.",
            },
          }}
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
        {errors.root?.serverError?.type && (
          <ErrorMessageTitle>
            {errors?.root?.serverError?.message}
          </ErrorMessageTitle>
        )}
        <FormBtn disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </FormBtn>
      </FormStyle>
      <BlockAside>
        <Separator>or continue with</Separator>
        <AsideStyle>
          <ButtonIcon>
            <img src={GoogleIcon} alt="" />
          </ButtonIcon>
          <ButtonIcon>
            <img src={GitIcon} alt="" />
          </ButtonIcon>
          <ButtonIcon>
            <img src={FacebookIcon} alt="" />
          </ButtonIcon>
        </AsideStyle>
      </BlockAside>
    </SignInStyle>
  );
};

export default SignIn;
