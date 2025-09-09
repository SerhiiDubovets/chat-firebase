import { MarkedMessage, Message } from "@/types/message.types";
import { ChatUser } from "@/types/user.types";

export interface messagesListProps {
  messages: Message[];
  currentUser?: ChatUser | null;
  onHandleAddMark: (message: MarkedMessage) => void | Promise<void>;
}
