import { serverTimestamp, writeBatch } from "firebase/firestore";

import { chatMemberService } from "@features/chat/services";

import { chatsApi, messagesApi } from "@shared/api/firestore/api";
import { isMessageTooLong } from "@shared/helpers/messages/isMessageTooLong";
import { db } from "@shared/lib/firebase";
import { MessageImage } from "@shared/types/common.types";

type SendMessageParams = {
  currentUserId: string;
  chatId: string;
  text: string;
  image?: MessageImage | null;
};

export const messageService = {
  async send({ currentUserId, chatId, text, image }: SendMessageParams) {
    if (isMessageTooLong(text)) {
      throw new Error("Message is too long");
    }
    const chat = await chatsApi.getChatById(chatId);

    if (!chat) {
      throw new Error("Chat not found");
    }

    const batch = writeBatch(db);

    const messageData = messagesApi.createMessage(chatId, {
      chatId,
      senderId: currentUserId,
      text,
      image: image ?? null,
    });

    batch.set(messageData.ref, messageData.data);

    const messageType = image ? "image" : "text";

    for (const userId of chat.participants) {
      chatMemberService.updateLastMessageBatch(batch, {
        chatId,
        userId,
        lastMessage: text,
        lastMessageId: messageData.ref.id,
        lastMessageType: messageType,
        lastMessageSenderId: currentUserId,
        lastMessageAt: serverTimestamp(),
      });
    }
    await batch.commit();
  },

  async deleteForMe(chatId: string, messageId: string, userId: string) {
    await messagesApi.deleteForMe({ chatId, messageId, userId });
    const lastMessage = await messagesApi.getLastActiveMessage(chatId, userId);
    if (!lastMessage) {
      await chatMemberService.updateLastMessage({
        chatId,
        userId,
        lastMessage: "",
        lastMessageId: null,
        lastMessageType: null,
        lastMessageSenderId: null,
        lastMessageAt: null,
      });

      return;
    }

    await chatMemberService.updateLastMessage({
      chatId,
      userId,
      lastMessage: lastMessage.text ?? "",
      lastMessageId: lastMessage.id,
      lastMessageType: lastMessage.image ? "image" : "text",
      lastMessageSenderId: lastMessage.senderId,
      lastMessageAt: lastMessage.createdAt,
    });
  },

  async deleteForEveryone(chatId: string, messageId: string) {
    const chat = await chatsApi.getChatById(chatId);

    if (!chat) {
      throw new Error("Chat not found");
    }

    await messagesApi.deleteForEveryone({ chatId, messageId });

    const lastMessage = await messagesApi.getLastActiveMessage(chatId);

    const batch = writeBatch(db);

    for (const userId of chat.participants) {
      if (!lastMessage) {
        chatMemberService.updateLastMessageBatch(batch, {
          chatId,
          userId,
          lastMessage: "",
          lastMessageId: null,
          lastMessageType: null,
          lastMessageSenderId: null,
          lastMessageAt: null,
        });

        continue;
      }

      chatMemberService.updateLastMessageBatch(batch, {
        chatId,
        userId,
        lastMessage: lastMessage.text ?? "",
        lastMessageId: lastMessage.id,
        lastMessageType: lastMessage.image ? "image" : "text",
        lastMessageSenderId: lastMessage.senderId,
        lastMessageAt: lastMessage.createdAt,
      });
    }

    await batch.commit();
  },
};
