import { serverTimestamp } from "firebase/firestore";

import { CreateMessageDTO } from "@features/chat/types/message.types";

import { MessageImage } from "@shared/types/common.types";

export type CreateMessageInput = {
  chatId: string;
  senderId: string;
  text?: string;
  image?: MessageImage | null;
};

export const createMessageObject = ({
  chatId,
  senderId,
  text,
  image,
}: CreateMessageInput): CreateMessageDTO => ({
  chatId,
  senderId,

  text: text ?? "",
  image: image ?? null,

  seenBy: [senderId],

  createdAt: serverTimestamp(),

  editedAt: null,

  deleted: false,
  deletedAt: null,
  deletedFor: [],
});
