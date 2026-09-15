import { Timestamp } from "firebase/firestore";

import { DraftMessage } from "@features/chat/types/message.types";
import { ChatUser } from "@features/user/types/user.types";

export interface UserItemProps {
  user: ChatUser;
  chatId: string;
  lastMessage?: string | null;
  selected?: boolean;
  isSeen?: boolean;
  lastMessageAt?: Timestamp | null;
  draft?: DraftMessage;
  lastMessageType?: string | null;
}

export interface UserItemStyleProps {
  $selected?: boolean;
}
