import { FieldValue, Timestamp } from "firebase/firestore";

import { ChatUser } from "@features/user/types/user.types";

export type ChatType = "private" | "group";

export interface BaseChat {
  type: ChatType;

  participants: string[];

  seenBy: string[];
}

export interface Chat extends BaseChat {
  createdAt: Timestamp | null;
}

export interface CreateChatDTO extends BaseChat {
  createdAt: FieldValue;
}

export type UpdateChatDTO = {
  seenBy?: string[];
};

export interface ChatItem extends Chat {
  id: string;
  user: ChatUser;
}
