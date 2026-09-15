import { ChatUser } from "@features/user/types/user.types";

export type SendMessageProps = {
  chatUser: ChatUser;
  clearSearch: () => void;
};
