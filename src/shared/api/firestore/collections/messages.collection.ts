import { collection } from "firebase/firestore";

import { messageConverter } from "@shared/api/firestore/converters/message.converter";
import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getMessagesCollectionRef = (chatId: string) =>
  collection(db, paths.messages(chatId));

export const getMessagesCollectionWithConverter = (chatId: string) =>
  collection(db, paths.messages(chatId)).withConverter(messageConverter);
