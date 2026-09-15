import { routes } from "@app/providers/router/routes";

import { useUserStore } from "@features/user/store/userStore";

import { PhotoIcon } from "@shared/assets/icons/icons";
import { formatChatListDate } from "@shared/helpers/date/formatChatListDate ";
import { Avatar } from "@shared/ui/avatar/Avatar";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./userItem.style";
import { UserItemProps } from "./userItem.types";

export const UserItem = ({
  user,
  chatId,
  lastMessage,
  lastMessageAt,
  draft,
  lastMessageType,
}: UserItemProps) => {
  const { currentUser } = useUserStore();

  const currentDate = lastMessageAt?.toDate();

  const draftText = draft?.text;
  const draftDate = draft?.updatedAt?.toDate();

  const date = draftText ? draftDate : currentDate;

  return (
    <S.ItemWrap>
      <S.ItemLink to={chatId ? routes.chatById(chatId) : routes.chat}>
        <Avatar size="lg" url={user?.avatar} />
        <S.DialogWrap>
          <S.TitleNameWrap>
            <S.TitleName>
              {user.blocked.includes(currentUser?.id ?? "")
                ? "User"
                : user.username}
            </S.TitleName>
            <S.MessageTime>{formatChatListDate(date)}</S.MessageTime>
          </S.TitleNameWrap>
          <S.LastMessageWrap>
            {draftText ? (
              <S.Subtitle>
                <S.DraftTitle>Draft: </S.DraftTitle>
                {draftText}
              </S.Subtitle>
            ) : lastMessageType === "image" ? (
              <>
                <Icon colorIcon="var(--text-primary-mute)">
                  <PhotoIcon />
                </Icon>
                <S.Subtitle>{lastMessage || "Photo"}</S.Subtitle>
              </>
            ) : (
              <S.Subtitle>{lastMessage}</S.Subtitle>
            )}
          </S.LastMessageWrap>
        </S.DialogWrap>
      </S.ItemLink>
    </S.ItemWrap>
  );
};
