import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import upload from "./upload";

interface RegisterUserProps {
  email: string;
  password: string;
  username: string;
  avatarFile: File | null;
}

export const registerUser = async ({
  email,
  password,
  username,
  avatarFile,
}: RegisterUserProps) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const userId = res.user.uid;

  const imgUrl = await upload(avatarFile);

  const newUser = {
    username,
    email,
    avatar: imgUrl,
    id: userId,
    blocked: [],
  };
  await setDoc(doc(db, "users", userId), newUser);
  await setDoc(doc(db, "userchats", userId), { chats: [] });

  return newUser;
};
