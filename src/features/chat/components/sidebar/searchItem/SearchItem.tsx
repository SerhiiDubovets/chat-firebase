import { routes } from "@app/providers/router/routes";

import { UserPlusIcon } from "@shared/assets/icons/icons";
import { Avatar } from "@shared/ui/avatar/Avatar";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./searchItem.style";
import { SearchItemProps } from "./searchItem.types";

export const SearchItem = ({ user }: SearchItemProps) => {
  return (
    <S.ItemWrap
      aria-label="Add new user"
      // onClick={() => handleCreateChat(user)}
    >
      <S.ItemLink to={routes.newChat(user.id)}>
        <S.UserDetail>
          <Avatar size="lg" url={user?.avatar} alt={user.username} />
          <S.UserName>{user.username}</S.UserName>
        </S.UserDetail>

        <Icon size="md" aria-label="Add new user">
          <UserPlusIcon />
        </Icon>
      </S.ItemLink>
    </S.ItemWrap>
  );
};
