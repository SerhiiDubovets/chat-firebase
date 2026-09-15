import { UserItem } from "@features/chat/components/sidebar/chatListSection/userItem/UserItem";

import { UserListProps } from "./userList.types";

export const UserList = ({
  filteredChats,
  isSeen,
  draftsMap,
  membersMap,
}: UserListProps) => {
  return (
    <ul>
      {filteredChats.map(({ id, user }) => {
        const draft = draftsMap.get(id);
        const member = membersMap.get(id);
        return (
          <UserItem
            key={user.id}
            chatId={id}
            isSeen={isSeen}
            user={user}
            lastMessage={member?.lastMessage}
            lastMessageAt={member?.lastMessageAt}
            draft={draft}
            lastMessageType={member?.lastMessageType}
          />
        );
      })}
    </ul>
  );
};
