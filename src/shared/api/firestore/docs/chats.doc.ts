import { doc } from "firebase/firestore";

import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getChatRef = (chatId: string) => doc(db, paths.chat(chatId));
