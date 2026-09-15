import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { ChatItem } from "@features/chat/types/chat.types";

import { usersApi } from "@shared/api/firestore/api/users.api";
import { isDefined } from "@shared/helpers/isDefined";

type ChatDoc = QueryDocumentSnapshot<DocumentData>;

export async function buildChatItems(
  docs: ChatDoc[],
  currentUserId: string,
): Promise<ChatItem[]> {
  const chats = docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as Array<
    ChatItem & {
      participants: string[];
    }
  >;

  const otherUserIds = chats
    .map((chat) => chat.participants.find((id) => id !== currentUserId))
    .filter(isDefined);

  const users = await usersApi.getUsersByIds(otherUserIds);

  const usersMap = new Map(users.map((user) => [user.id, user]));

  return chats
    .map((chat) => {
      const otherUserId = chat.participants.find((id) => id !== currentUserId);

      if (!otherUserId) return null;

      const user = usersMap.get(otherUserId);

      if (!user) return null;

      const chatItem: ChatItem = {
        ...chat,
        user,
      };

      return chatItem;
    })
    .filter(isDefined);
}
