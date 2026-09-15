import { doc } from "firebase/firestore";

import { draftMessageConverter } from "@shared/api/firestore/converters/draftMessage.convertes";
import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getDraftDocRef = (userId: string, chatId: string) =>
  doc(db, paths.draft(userId, chatId)).withConverter(draftMessageConverter);
