import { useEffect, useState } from "react";

import { SearchList } from "@features/chat/components/sidebar/chatListSection/searchList/SearchList";
import { UserItemSkeleton } from "@features/chat/components/sidebar/chatListSection/userItem/userItemSkeleton/UserItemSkeleton";
import { EmptyStateList } from "@features/chat/components/sidebar/emptyStateList/EmptyStateList";
import { TitleList } from "@features/chat/components/sidebar/titleList/TitleList";
import { useChatStore } from "@features/chat/store/chatStore";
import { userService } from "@features/user/services/user.service";
import { useUserStore } from "@features/user/store/userStore";
import { ChatUser } from "@features/user/types/user.types";

import { useDebounce } from "@shared/hooks/useDebounce";

import { SearchListSectionProps } from "./searchListSection.types";

export const SearchListSection = ({ input }: SearchListSectionProps) => {
  const { currentUser } = useUserStore();
  const [users, setUsers] = useState<ChatUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(input, 300);
  const { chats } = useChatStore();

  useEffect(() => {
    let cancelled = false;

    const handleSearch = async () => {
      if (!currentUser?.id) return;

      if (!debouncedSearch.trim()) {
        setUsers([]);
        return;
      }
      setIsLoading(true);

      try {
        const searchedUsers = await userService.searchUsers(
          debouncedSearch,
          currentUser.id,
        );

        const existingChatUserIds = new Set(
          chats.flatMap((chat) => chat.participants),
        );

        const filteredUsers = searchedUsers.filter(
          (user) => !existingChatUserIds.has(user.id),
        );

        if (cancelled) return;

        setUsers(filteredUsers);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();

    return () => {
      cancelled = true;
    };
  }, [currentUser?.id, debouncedSearch, chats]);

  return (
    <>
      <TitleList title="Add user" />

      {!isLoading && debouncedSearch && users.length === 0 && (
        <EmptyStateList text="No users found" />
      )}

      {isLoading && <UserItemSkeleton />}

      {users.length > 0 && <SearchList users={users} />}
    </>
  );
};
