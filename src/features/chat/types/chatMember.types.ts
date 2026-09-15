import { FieldValue, Timestamp } from "firebase/firestore";

export type LastMessageType = "text" | "image";

export interface ChatMember {
  lastMessage: string;
  lastMessageId: string | null;
  lastMessageType: LastMessageType | null;
  lastMessageSenderId: string | null;
  lastMessageAt: Timestamp | null;
}

export interface ChatMemberDTO {
  lastMessage: string;
  lastMessageId: string | null;
  lastMessageType: LastMessageType | null;
  lastMessageSenderId: string | null;
  lastMessageAt: FieldValue | Timestamp | null;
}

export interface ChatMemberItem extends ChatMember {
  chatId: string;
}
