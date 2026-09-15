import { collection } from "firebase/firestore";

import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

import { chatConverter } from "../converters/chat.converter";

export const getChatsCollectionRef = collection(db, paths.chats).withConverter(
  chatConverter,
);
