import {
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
  WriteBatch,
} from "firebase/firestore";

import {
  Chat,
  ChatItem,
  CreateChatDTO,
  UpdateChatDTO,
} from "@features/chat/types/chat.types";

import { getChatsCollectionRef } from "@shared/api/firestore/collections/chats.collection";
import { getChatRef } from "@shared/api/firestore/docs/chats.doc";
import { buildChatItems } from "@shared/api/firestore/mappers/chats.mapper";

interface SubscribeUserChatsOptions {
  onData: (chats: ChatItem[]) => void;
  onLoading?: (loading: boolean) => void;
  onError?: (error: unknown) => void;
}

export const chatsApi = {
  async getChatById(chatId: string): Promise<Chat | null> {
    const snap = await getDoc(getChatRef(chatId));

    return snap.exists() ? (snap.data() as Chat) : null;
  },

  async createChat(chatId: string, data: CreateChatDTO) {
    await setDoc(getChatRef(chatId), data);
  },

  async updateChat(chatId: string, data: UpdateChatDTO) {
    await updateDoc(getChatRef(chatId), data);
  },

  updateChatBatch(batch: WriteBatch, chatId: string, data: UpdateChatDTO) {
    const chatRef = getChatRef(chatId);

    batch.update(chatRef, data);
  },

  subscribeUserChats(userId: string, options: SubscribeUserChatsOptions) {
    const { onData, onLoading, onError } = options;

    onLoading?.(true);

    const q = query(
      getChatsCollectionRef,
      where("participants", "array-contains", userId),
    );

    let isFirstSnapshot = true;

    return onSnapshot(
      q,
      async (snapshot) => {
        try {
          const chatItems = await buildChatItems(snapshot.docs, userId);

          onData(chatItems);
        } catch (error) {
          onError?.(error);
        } finally {
          if (isFirstSnapshot) {
            onLoading?.(false);
            isFirstSnapshot = false;
          }
        }
      },
      (error) => {
        onError?.(error);

        if (isFirstSnapshot) {
          onLoading?.(false);
          isFirstSnapshot = false;
        }
      },
    );
  },
};
