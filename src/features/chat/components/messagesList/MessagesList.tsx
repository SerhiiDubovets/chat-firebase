import { useMemo } from "react";

import { isSameDay } from "date-fns";

import { DateSeparator } from "@features/chat/components/dateSeparator/DateSeparator";
import { MessageItem } from "@features/chat/components/messageItem/MessageItem";

import { formatChatListDate } from "@shared/helpers/date/formatChatListDate ";

import * as S from "./messagesList.style";
import { MessagesListProps } from "./messagesListProps.types";
import { MessagesListSkeleton } from "./messagesListSkeleton/MessagesListSkeleton";

export const MessagesList = ({
  messages,
  currentUser,
  onHandleAddMark,
  isLoading,
}: MessagesListProps) => {
  const visibleMessages = useMemo(() => {
    return messages.filter((message) => {
      if (message.deleted) return false;

      return !message.deletedFor?.includes(currentUser.id);
    });
  }, [messages, currentUser.id]);

  if (isLoading) return <MessagesListSkeleton />;

  return visibleMessages.map((message, index) => {
    const prevMessage = visibleMessages[index - 1];

    const currentDate = message.createdAt?.toDate();

    const prevDate = prevMessage?.createdAt?.toDate();

    const showDateSeparator = !prevDate || !isSameDay(currentDate, prevDate);

    return (
      <S.GroupForData key={message.id}>
        {showDateSeparator && (
          <DateSeparator date={formatChatListDate(currentDate)} />
        )}

        <MessageItem
          message={message}
          currentUser={currentUser}
          onHandleAddMark={onHandleAddMark}
        />
      </S.GroupForData>
    );
  });
};
