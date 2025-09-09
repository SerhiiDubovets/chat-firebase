import { ChatItem } from "@/types/chat.types";
import { ChatUser } from "@/types/user.types";

export interface UserListProps {
  filteredChats: ChatItem[];
  handleSelect: (chatId: string, user: ChatUser) => void;
  isSeen?: boolean;
  selectedChatId: string | null;
}
