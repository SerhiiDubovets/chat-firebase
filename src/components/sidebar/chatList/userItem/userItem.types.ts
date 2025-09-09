import { ChatUser } from "@/types/user.types";

export interface UserItemProps {
  user: ChatUser;
  chatId: string;
  handleSelect: (chatId: string, user: ChatUser) => void;
  lastMessage?: string;
  selected?: boolean;
  isSeen?: boolean;
  updatedAt?: number;
  updateAt?: number;
}

export interface UserItemStyleProps {
  $selected?: boolean;
}
