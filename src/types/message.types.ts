import { Timestamp } from "firebase/firestore";

export interface ChatMessage {
  senderId: string;
  text?: string;
  img?: string;
  createdAt: Timestamp;
  id: string;
}

export interface Message extends ChatMessage {
  id: string;
}

export interface MarkedMessage extends ChatMessage {
  id: string;
  markedBy?: string;
}
