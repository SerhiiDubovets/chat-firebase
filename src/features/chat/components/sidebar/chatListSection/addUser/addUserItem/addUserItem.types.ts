import { ChatUser } from "@features/user/types/user.types";

export interface AddUserItemProps {
  user: ChatUser;
  handleCreateChat: (user: ChatUser) => void;
}
