import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";

import { db } from "@/lib/firebase";
import { useUserStore } from "@/store/userStore";
import {
  AddUserBtnStyle,
  AddUserStyle,
  FormStyle,
  UserDetailStyle,
  UserStyle,
} from "./addUser.style";
// import { useUserStore } from "../../../../lib/userStore";

interface User {
  id: string;
  username: string;
  avatar?: string;
}

const AddUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        querySnapShot.forEach((doc) => {
          const data = doc.data() as Omit<User, "id">;
          setUser({ id: doc.id, ...data });
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user?.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser?.id,
          updatedAt: Date.now(),
        }),
      });
      await updateDoc(doc(userChatsRef, currentUser?.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user?.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddUserStyle>
      <FormStyle onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </FormStyle>
      {user && (
        <UserStyle>
          <UserDetailStyle>
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>{user.username}</span>
          </UserDetailStyle>
          <AddUserBtnStyle onClick={handleAdd}>Add User</AddUserBtnStyle>
        </UserStyle>
      )}
    </AddUserStyle>
  );
};

export default AddUser;
