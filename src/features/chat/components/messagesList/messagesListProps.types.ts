import { MarkedMessage, Message } from "@features/chat/types/message.types";
import { ChatUser } from "@features/user/types/user.types";

export interface MessagesListProps {
  messages: Message[];
  currentUser: ChatUser;
  isLoading: boolean;
  onHandleAddMark: (message: MarkedMessage) => void | Promise<void>;
}
