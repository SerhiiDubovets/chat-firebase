import { doc, getDoc } from "firebase/firestore";

import { ChatUser } from "@/types/user.types";
import { db } from "./firebase";

export async function getUserById(uid: string): Promise<ChatUser | null> {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? (docSnap.data() as ChatUser) : null;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
}
