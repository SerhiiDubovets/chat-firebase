import { collection } from "firebase/firestore";

import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

import { draftMessageConverter } from "../converters/draftMessage.convertes";

// export const getMessagesCollectionRef = (chatId: string) =>
//   collection(db, paths.messages(chatId));

export const getDraftsCollectionRef = (userId: string) =>
  collection(db, paths.drafts(userId)).withConverter(draftMessageConverter);
