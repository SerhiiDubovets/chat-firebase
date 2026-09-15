import { collection } from "firebase/firestore";

import { chatMemberConverter } from "@shared/api/firestore/converters/chatMember.converter";
import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getMembersCollectionWithConverter = (chatId: string) =>
  collection(db, paths.members(chatId)).withConverter(chatMemberConverter);
