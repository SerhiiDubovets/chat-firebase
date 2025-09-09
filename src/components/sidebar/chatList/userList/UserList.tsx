import { UserItem } from "@/components/sidebar/chatList/userItem/UserItem";
import { UserListProps } from "./userList.types";

export const UserList = ({
  filteredChats,
  handleSelect,
  isSeen,
  selectedChatId,
}: UserListProps) => {
  return (
    <ul>
      {filteredChats.map(
        ({ chatId, user, lastMessage, updatedAt, updateAt }) => (
          <UserItem
            key={chatId}
            chatId={chatId}
            handleSelect={handleSelect}
            isSeen={isSeen}
            user={user}
            lastMessage={lastMessage}
            updatedAt={updatedAt}
            updateAt={updateAt}
            selected={selectedChatId === chatId}
          />
        )
      )}
    </ul>
  );
};
