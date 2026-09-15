import { AddUserItem } from "@features/chat/components/chatList/addUser/addUserItem/AddUserItem";

import { AddUserListProps } from "./addUserList.types";

export const AddUserList = ({ users, handleCreateChat }: AddUserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <AddUserItem
          key={user.id}
          user={user}
          handleCreateChat={handleCreateChat}
        />
      ))}
    </ul>
  );
};
