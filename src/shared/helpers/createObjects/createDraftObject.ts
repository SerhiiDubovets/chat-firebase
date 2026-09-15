import { serverTimestamp } from "firebase/firestore";

import { DraftMessageDTO } from "@features/chat/types/message.types";

export type CreateDraftInput = {
  text: string;
  chatId: string;
};

export const createDraftObject = ({
  chatId,
  text,
}: CreateDraftInput): DraftMessageDTO => ({
  chatId,
  text: text ?? "",

  updatedAt: serverTimestamp(),
});
