import { doc } from "firebase/firestore";

import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

import { getMessagesCollectionRef } from "../collections/messages.collection";

export const getMessageRef = (chatId: string, messageId: string) =>
  doc(db, paths.message(chatId, messageId));

export const createMessageRef = (chatId: string) =>
  doc(getMessagesCollectionRef(chatId));
