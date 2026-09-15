import { UserStatus } from "@features/chat/components/userStatus/UserStatus";

import { Avatar } from "@shared/ui/avatar/Avatar";

import * as S from "./userCard.style";
import { UserCardProps } from "./userCard.types";

export const UserCard = ({ user, isUserLoading }: UserCardProps) => {
  // const { user } = useChatStore();

  if (isUserLoading) return <div>loading...</div>;

  return (
    <S.Wrap>
      <Avatar
        url={user?.avatar ?? null}
        alt={user?.username ?? "User avatar"}
        size="7.75rem"
      />
      <S.InfoWrap>
        <S.UserName>{user?.username ?? ""}</S.UserName>
        <UserStatus user={user} />
        {/* <UserCardPhoneStyle>
          {user?.phone ?? "+00 000 0000000"}
        </UserCardPhoneStyle> */}
      </S.InfoWrap>
    </S.Wrap>
  );
};
