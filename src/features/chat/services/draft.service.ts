import { setDoc } from "firebase/firestore";

import { draftsApi } from "@shared/api/firestore/api/drafts.api";

type SaveDraftParams = {
  userId: string;
  chatId: string;
  text: string;
};

export const draftService = {
  async get(userId: string, chatId: string) {
    return draftsApi.get(userId, chatId);
  },

  async save({ userId, chatId, text }: SaveDraftParams) {
    const draftData = draftsApi.createDraft(userId, chatId, {
      chatId,
      text,
    });

    await setDoc(draftData.ref, draftData.data);
  },

  async remove(userId: string, chatId: string) {
    await draftsApi.remove(userId, chatId);
  },
};
