import { MarkedMessage } from "@features/chat/types/message.types";

export interface MarkedMessagesListProps {
  messages: MarkedMessage[];
  onHandleUnMark: (id: string) => void;
}
