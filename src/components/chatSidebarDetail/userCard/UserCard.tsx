import { Avatar } from "@/components/avatar/Avatar";
import { useChatStore } from "@/store/chatStore";
import {
  UserCardInfoStyle,
  UserCardNameStyle,
  UserCardPhoneStyle,
  UserCardStyle,
} from "./userCard.style";

export const UserCard = () => {
  const { user } = useChatStore();
  return (
    <UserCardStyle>
      <Avatar url={user?.avatar ?? null} alt={user?.username} size="7.75rem" />
      <UserCardInfoStyle>
        <UserCardNameStyle>{user?.username ?? ""}</UserCardNameStyle>
        <UserCardPhoneStyle>
          {user?.phone ?? "+00 000 0000000"}
        </UserCardPhoneStyle>
      </UserCardInfoStyle>
    </UserCardStyle>
  );
};
