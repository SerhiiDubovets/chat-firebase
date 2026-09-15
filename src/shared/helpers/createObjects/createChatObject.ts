import { serverTimestamp } from "firebase/firestore";

import { ChatType, CreateChatDTO } from "@features/chat/types/chat.types";
type CreateChatInput = {
  participants: string[];
  type?: ChatType;
};
export const createChatObject = ({
  participants,
  type = "private",
}: CreateChatInput): CreateChatDTO => ({
  type,
  participants,

  seenBy: [],

  createdAt: serverTimestamp(),
});
