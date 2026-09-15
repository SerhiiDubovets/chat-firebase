import { ChatItem } from "@features/chat/types/chat.types";
import { ChatMemberItem } from "@features/chat/types/chatMember.types";
import { DraftMessage } from "@features/chat/types/message.types";

export interface UserListProps {
  filteredChats: ChatItem[];
  draftsMap: Map<string, DraftMessage>;
  membersMap: Map<string, ChatMemberItem>;
  isSeen?: boolean;
}
