import { ChatUser } from "@features/user/types/user.types";

export interface AddUserListProps {
  users: ChatUser[];
  handleCreateChat: (user: ChatUser) => void;
}
