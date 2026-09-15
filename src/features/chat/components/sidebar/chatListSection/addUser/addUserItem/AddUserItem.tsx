import { useState } from "react";

import { UserPlusIcon } from "@shared/assets/icons/icons";
import { Avatar } from "@shared/ui/avatar/Avatar";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import * as S from "./addUserItem.style";
import { AddUserItemProps } from "./addUserItem.types";

export const AddUserItem = ({ user, handleCreateChat }: AddUserItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
    console.log(user);
  };
  return (
    <S.User
      key={user.id}
      aria-label="Add new user"
      onClick={() => handleCreateChat(user)}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}>
      <S.UserDetail>
        <Avatar size="3rem" url={user?.avatar} alt={user.username} />
        <S.UserName>{user.username}</S.UserName>
      </S.UserDetail>
      {isHovered && (
        <ButtonIcon
          sizeIcon="1.25rem"
          color="#ffffff"
          aria-label="Add new user"
          title="Add new user">
          <UserPlusIcon />
        </ButtonIcon>
      )}
    </S.User>
  );
};
