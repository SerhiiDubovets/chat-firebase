import { MessageItem } from "@/components/chat/messageItem/MessageItem";
import { messagesListProps } from "./messagesListProps.types";

export const MessagesList = ({
  messages,
  currentUser,
  onHandleAddMark,
}: messagesListProps) => {
  return messages?.map((message) => (
    <MessageItem
      key={message.id}
      currentUser={currentUser}
      message={message}
      onHandleAddMark={onHandleAddMark}
    />
  ));
};
