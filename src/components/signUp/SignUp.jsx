import { useState } from "react";
// import { useUserStore } from "../../../lib/userStore";

import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import { FormStyle, SingUpStyle } from "./signUp.style";
import { useUserStore } from "../../lib/userStore.js";

const SignUp = () => {
  const { changeCurrentUser, isLoading, fetchUserInfo } = useUserStore();
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (data) => {
    setLoading(true);

    const { username, email, password } = data;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user.uid);

      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      changeCurrentUser(res.user.uid);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Account created! You can login now!");
    } catch (err) {
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
      setLoading(false);
      reset();
    }
  };

  return (
    <SingUpStyle>
      <h2>Create an Account</h2>
      <FormStyle onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="file">
          <img src={avatar.url || "./avatar.png"} alt="" />
          Upload an image
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleAvatar}
        />
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Please. Enter your name.",
            pattern: {
              value: /[A-Za-z0-9]{3}/,
              message: "Must exceed min 3 characters.",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Please. Enter your email.",
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "This input is email only.",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />
        <ErrorMessage
          errors={errors}
          name="root.serverError"
          render={({ message }) => <p>{message}</p>}
        />
        <button disabled={loading}>{loading ? "Loading..." : "Sign Up"}</button>
      </FormStyle>
    </SingUpStyle>
  );
};

export default SignUp;
