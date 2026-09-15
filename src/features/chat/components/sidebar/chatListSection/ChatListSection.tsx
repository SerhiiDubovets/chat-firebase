import { useEffect, useMemo, useState } from "react";

import { UserItemSkeleton } from "@features/chat/components/sidebar/chatListSection/userItem/userItemSkeleton/UserItemSkeleton";
import { UserList } from "@features/chat/components/sidebar/chatListSection/userList/UserList";
import { EmptyStateList } from "@features/chat/components/sidebar/emptyStateList/EmptyStateList";
import { SearchListSection } from "@features/chat/components/sidebar/searchListSection/SearchListSection";
import { TitleList } from "@features/chat/components/sidebar/titleList/TitleList";
import { useChatStore } from "@features/chat/store/chatStore";
import { ChatMemberItem } from "@features/chat/types/chatMember.types";
import { DraftMessage } from "@features/chat/types/message.types";
import { useUserStore } from "@features/user/store/userStore";

import { chatsApi, draftsApi, membersApi } from "@shared/api/firestore/api";

import * as S from "./chatListSection.style";
import { ChatListSectionProps } from "./chatListSection.types";

export const ChatListSection = ({ input }: ChatListSectionProps) => {
  const { currentUser } = useUserStore();
  const [drafts, setDrafts] = useState<DraftMessage[]>([]);
  const [members, setMembers] = useState<ChatMemberItem[]>([]);
  const { chats, setChats, setInitialChatsLoading, isInitialChatsLoading } =
    useChatStore();

  const currentUserId = currentUser?.id;

  useEffect(() => {
    if (!currentUserId) return;
    const unsubscribe = chatsApi.subscribeUserChats(currentUserId, {
      onData: setChats,
      onLoading: setInitialChatsLoading,
      onError: console.error,
    });
    return unsubscribe;
  }, [currentUserId, setChats, setInitialChatsLoading]);

  useEffect(() => {
    if (!currentUserId) return;

    const unsubscribe = membersApi.subscribe(currentUserId, setMembers);

    return unsubscribe;
  }, [currentUserId]);

  useEffect(() => {
    if (!currentUserId) return;

    const unsubscribe = draftsApi.subscribe(currentUserId, setDrafts);

    return unsubscribe;
  }, [currentUserId]);

  const draftsMap = useMemo(() => {
    return new Map(drafts.map((draft) => [draft.chatId, draft]));
  }, [drafts]);

  const membersMap = useMemo(() => {
    return new Map(members.map((member) => [member.chatId, member]));
  }, [members]);

  const filteredChats = useMemo(() => {
    return chats.filter((c) =>
      c.user.username.toLowerCase().includes(input.toLowerCase()),
    );
  }, [chats, input]);

  return (
    <S.ListSection>
      <TitleList title="Chats" />
      {isInitialChatsLoading ? (
        <UserItemSkeleton />
      ) : input && filteredChats.length === 0 ? (
        <EmptyStateList text="No users found" />
      ) : !input && chats.length === 0 ? (
        <EmptyStateList text="No chats yet" />
      ) : (
        <UserList
          filteredChats={filteredChats}
          membersMap={membersMap}
          draftsMap={draftsMap}
        />
      )}
      {input.length > 0 && <SearchListSection input={input} />}
    </S.ListSection>
  );
};
