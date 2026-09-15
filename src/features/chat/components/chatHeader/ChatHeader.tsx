import { ChatHeaderSkeleton } from "@features/chat/components/chatHeader/chatHeaderSkeleton/ChatHeaderSkeleton";
import { UserStatus } from "@features/chat/components/userStatus/UserStatus";
import { useChatStore } from "@features/chat/store/chatStore";

import { InfOptionsIcon } from "@shared/assets/icons/icons";
import { Avatar } from "@shared/ui/avatar/Avatar";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import * as S from "./chatHeader.style";
import { ChatHeaderProps } from "./chatHeader.types";

export const ChatHeader = ({ user, loading }: ChatHeaderProps) => {
  const { toggleDetail } = useChatStore();

  const handleShowInfo = () => toggleDetail();

  if (loading) {
    return (
      <S.HeaderWrap>
        <ChatHeaderSkeleton />
      </S.HeaderWrap>
    );
  }

  if (!user) return null;

  return (
    <S.HeaderWrap>
      <S.UserWrap>
        <Avatar url={user.avatar} size="md" alt="User avatar" />
        <S.InfoWrap>
          <S.UserName>{user.username}</S.UserName>
          <UserStatus user={user} />
        </S.InfoWrap>
      </S.UserWrap>

      <ButtonIcon
        onClick={handleShowInfo}
        aria-label="User Info"
        size="md"
        title="User Info">
        <InfOptionsIcon />
      </ButtonIcon>
    </S.HeaderWrap>
  );
};
