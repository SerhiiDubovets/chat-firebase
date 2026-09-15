import { ChatUser } from "@features/user/types/user.types";

export type UserCardProps = {
  user: ChatUser | null;
  isUserLoading: boolean;
};
