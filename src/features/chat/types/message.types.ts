import { FieldValue, Timestamp } from "firebase/firestore";

import { MessageImage } from "@shared/types/common.types";

export interface Message {
  id: string;
  chatId: string;

  senderId: string;

  text: string | null;
  image: MessageImage | null;

  createdAt: Timestamp;
  seenBy: string[];

  editedAt: Timestamp | null;

  deleted: boolean;
  deletedAt: Timestamp | null;

  deletedFor: string[];
}

export interface CreateMessageDTO {
  chatId: string;
  senderId: string;

  text: string | null;
  image: MessageImage | null;

  createdAt: FieldValue;
  seenBy: string[];

  editedAt: null;

  deleted: false;
  deletedFor: string[];

  deletedAt: null;
}

export type MessageType = "text" | "image";

export interface MarkedMessage extends Message {
  id: string;
  markedBy?: string;
}

export interface DraftMessage {
  chatId: string;
  text: string;

  updatedAt: Timestamp | null;
}

export interface DraftMessageDTO {
  chatId: string;
  text: string;

  updatedAt: FieldValue;
}
