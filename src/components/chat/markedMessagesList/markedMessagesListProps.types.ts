import { MarkedMessage } from "@/types/message.types";

export interface MarkedMessagesListProps {
  messages: MarkedMessage[];
  onHandleUnMark: (id: string) => void;
}
