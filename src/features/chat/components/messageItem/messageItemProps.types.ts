import { MarkedMessage, Message } from "@features/chat/types/message.types";
import { ChatUser } from "@features/user/types/user.types";

export interface MessageItemProps {
  message: Message;
  currentUser: ChatUser;
  onHandleAddMark: (message: MarkedMessage) => void | Promise<void>;
}

export interface MessageStyleProps {
  $own: boolean;
}
