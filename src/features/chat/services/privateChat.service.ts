import { PrivateChatResult } from "@features/chat/types/privateChat.types";
import { ChatUser } from "@features/user/types/user.types";

import { chatsApi } from "@shared/api/firestore/api/chats.api";
import { createChatObject } from "@shared/helpers/createObjects/createChatObject";

export const privateChatService = {
  async getOrCreatePrivateChat(
    currentUser: ChatUser,
    user: ChatUser,
  ): Promise<string> {
    const chatId =
      currentUser.id < user.id
        ? `${currentUser.id}_${user.id}`
        : `${user.id}_${currentUser.id}`;

    const chat = await chatsApi.getChatById(chatId);

    if (!chat) {
      const chatData = createChatObject({
        participants: [currentUser.id, user.id],
      });

      await chatsApi.createChat(chatId, chatData);
    }

    return chatId;
  },

  async create(
    currentUser: ChatUser,
    user: ChatUser,
  ): Promise<PrivateChatResult> {
    const chatId =
      currentUser.id < user.id
        ? `${currentUser.id}_${user.id}`
        : `${user.id}_${currentUser.id}`;

    const chat = await chatsApi.getChatById(chatId);

    if (chat) return { status: "exists", chatId };

    const chatData = createChatObject({
      participants: [currentUser.id, user.id],
    });

    await chatsApi.createChat(chatId, chatData);
    return { status: "created", chatId };
  },

  // async updateLastMessage(
  //   chatId: string,
  //   message: string,
  //   senderId: string,
  // ): Promise<PrivateChatResult> {
  //   await chatsApi.updateChat(chatId, {
  //     lastMessage: message,
  //     lastMessageSenderId: senderId,
  //     lastMessageAt: serverTimestamp(),
  //   });
  //   return { status: "updated", chatId };
  // },
};
