import { FieldValue, serverTimestamp, Timestamp } from "firebase/firestore";

import {
  ChatMemberDTO,
  LastMessageType,
} from "@features/chat/types/chatMember.types";

export type CreateChatMemberInput = {
  lastMessage?: string;
  lastMessageId?: string | null;
  lastMessageType?: LastMessageType | null;
  lastMessageSenderId?: string | null;
  lastMessageAt?: FieldValue | Timestamp | null;
};

export const createChatMemberObject = ({
  lastMessage,
  lastMessageId,
  lastMessageType,
  lastMessageSenderId,
  lastMessageAt,
}: CreateChatMemberInput): ChatMemberDTO => ({
  lastMessage: lastMessage ?? "",
  lastMessageId: lastMessageId ?? null,
  lastMessageType: lastMessageType ?? null,
  lastMessageSenderId: lastMessageSenderId ?? null,
  lastMessageAt: lastMessageAt ?? serverTimestamp(),
});
