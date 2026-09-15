import { ChatUser } from "@features/user/types/user.types";

export type ChatHeaderProps = {
  user: ChatUser | null;
  loading: boolean;
};
