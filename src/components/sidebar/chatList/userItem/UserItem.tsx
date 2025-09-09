import { Avatar } from "@/components/avatar/Avatar";
import { useUserStore } from "@/store/userStore";
import {
  NameUserItemStyle,
  UserItemStyle,
  UserMessageItemStyle,
  UserMessageStyle,
} from "./userItem.style";
import { UserItemProps } from "./userItem.types";

export const UserItem = ({
  user,
  chatId,
  handleSelect,
  lastMessage,
  selected,
}: UserItemProps) => {
  const { currentUser } = useUserStore();

  return (
    <UserItemStyle
      onClick={() => {
        handleSelect(chatId, user);
      }}
      $selected={selected}>
      <Avatar size="3rem" url={user.avatar} />
      <UserMessageStyle>
        <NameUserItemStyle>
          {user.blocked.includes(currentUser?.id ?? "")
            ? "User"
            : user.username}
        </NameUserItemStyle>
        <UserMessageItemStyle>{lastMessage}</UserMessageItemStyle>
      </UserMessageStyle>
    </UserItemStyle>
  );
};
