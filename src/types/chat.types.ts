import { ChatUser } from "./user.types";

export interface ChatItem {
  user: ChatUser;
  isSeen?: boolean;
  chatId: string;
  lastMessage?: string;
  updatedAt?: number;
  updateAt?: number;
  receiverId?: string;
}
