import { MarkedMessage, Message } from "@/types/message.types";
import { ChatUser } from "@/types/user.types";

export interface MessageItemProps {
  message: Message;
  currentUser?: ChatUser | null;
  onHandleAddMark: (message: MarkedMessage) => void | Promise<void>;
}

export interface MessageStyleProps {
  $own: boolean;
}
