import { Timestamp } from "firebase/firestore";
import { Message } from "./message.types";

export interface ChatMessages {
  createdAt: Timestamp;
  messages: Message[];
}
