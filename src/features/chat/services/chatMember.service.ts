import { FieldValue, setDoc, Timestamp, WriteBatch } from "firebase/firestore";

import { LastMessageType } from "@features/chat/types/chatMember.types";

import { membersApi } from "@shared/api/firestore/api";

type UpdateLastMessageParams = {
  chatId: string;
  userId: string;
  lastMessage: string;
  lastMessageId: string | null;
  lastMessageType: LastMessageType | null;
  lastMessageSenderId: string | null;
  lastMessageAt: Timestamp | FieldValue | null;
};

export const chatMemberService = {
  async updateLastMessage({
    chatId,
    userId,
    lastMessage,
    lastMessageId,
    lastMessageType,
    lastMessageSenderId,
    lastMessageAt,
  }: UpdateLastMessageParams) {
    const memberData = membersApi.update({
      chatId,
      userId,
      data: {
        lastMessage,
        lastMessageId,
        lastMessageType,
        lastMessageSenderId,
        lastMessageAt,
      },
    });

    await setDoc(memberData.ref, memberData.data, { merge: true });
  },

  updateLastMessageBatch(
    batch: WriteBatch,
    {
      chatId,
      userId,
      lastMessage,
      lastMessageId,
      lastMessageType,
      lastMessageSenderId,
      lastMessageAt,
    }: UpdateLastMessageParams,
  ) {
    membersApi.updateBatch({
      batch,
      chatId,
      userId,
      data: {
        lastMessage,
        lastMessageId,
        lastMessageType,
        lastMessageSenderId,
        lastMessageAt,
      },
    });
  },
};
