import {
  arrayUnion,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  WriteBatch,
} from "firebase/firestore";

import { Message } from "@features/chat/types/message.types";

import { getMessagesCollectionWithConverter } from "@shared/api/firestore/collections/messages.collection";
import {
  createMessageRef,
  getMessageRef,
} from "@shared/api/firestore/docs/messages.doc";
import {
  CreateMessageInput,
  createMessageObject,
} from "@shared/helpers/createObjects/createMessageObject";

type MessageParams = {
  chatId: string;
  messageId: string;
};

type DeleteForMeParams = MessageParams & {
  userId: string;
};

type DeleteForMeBatchParams = MessageParams & {
  userId: string;
  batch: WriteBatch;
};

type EditParams = MessageParams & {
  text: string;
};

export const messagesApi = {
  subscribe(chatId: string, callback: (messages: Message[]) => void) {
    const q = query(
      getMessagesCollectionWithConverter(chatId),
      orderBy("createdAt", "asc"),
    );

    return onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data());

      callback(messages);
    });
  },

  async getLastActiveMessage(chatId: string, userId?: string) {
    const q = query(
      getMessagesCollectionWithConverter(chatId),
      where("deleted", "==", false),
      orderBy("createdAt", "desc"),
    );

    const snapshot = await getDocs(q);

    const messages = snapshot.docs.map((doc) => doc.data());

    if (!userId) {
      return messages[0] ?? null;
    }

    return (
      messages.find((message) => !message.deletedFor?.includes(userId)) ?? null
    );
  },

  createMessage(chatId: string, data: CreateMessageInput) {
    const messageRef = createMessageRef(chatId);

    return {
      ref: messageRef,
      data: createMessageObject(data),
    };
  },

  deleteForMeBatch({
    batch,
    chatId,
    messageId,
    userId,
  }: DeleteForMeBatchParams) {
    const ref = getMessageRef(chatId, messageId);

    batch.update(ref, {
      deletedFor: arrayUnion(userId),
    });
  },

  async deleteForMe({ chatId, messageId, userId }: DeleteForMeParams) {
    const ref = getMessageRef(chatId, messageId);
    await updateDoc(ref, {
      deletedFor: arrayUnion(userId),
    });
  },

  async deleteForEveryone({ chatId, messageId }: MessageParams) {
    const ref = getMessageRef(chatId, messageId);
    await updateDoc(ref, {
      deleted: true,
      text: null,
      image: null,
      deletedAt: serverTimestamp(),
    });
  },

  async edit({ chatId, messageId, text }: EditParams) {
    const ref = getMessageRef(chatId, messageId);
    await updateDoc(ref, {
      text,
      editedAt: serverTimestamp(),
    });
  },
};
