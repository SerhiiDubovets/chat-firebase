import { doc } from "firebase/firestore";

import { chatMemberConverter } from "@shared/api/firestore/converters/chatMember.converter";
import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getMemberDocRef = (chatId: string, userId: string) =>
  doc(db, paths.member(chatId, userId)).withConverter(chatMemberConverter);
