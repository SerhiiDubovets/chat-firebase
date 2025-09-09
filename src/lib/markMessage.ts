import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

interface MarkedMessage {
  text?: string;
  createdAt: Timestamp;
  senderId: string;
  markedBy: string;
  img?: string;
}

export const markMessage = async (
  chatId: string,
  messageId: string,
  messageData: Omit<MarkedMessage, "markedBy">,
  currentUserId: string
): Promise<void> => {
  const markedRef = doc(db, "chats", chatId, "markedMessages", messageId);
  await setDoc(markedRef, { ...messageData, markedBy: currentUserId });
};

export const getMarkedMessages = async (
  chatId: string
): Promise<(MarkedMessage & { id: string })[]> => {
  const colRef = collection(db, "chats", chatId, "markedMessages");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as (MarkedMessage & { id: string })[];
};

export const unMarkMessage = async (
  chatId: string,
  messageId: string
): Promise<void> => {
  const docRef = doc(db, "chats", chatId, "markedMessages", messageId);
  await deleteDoc(docRef);
};
