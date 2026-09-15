import {
  deleteDoc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { DraftMessage } from "@features/chat/types/message.types";

import {
  CreateDraftInput,
  createDraftObject,
} from "@shared/helpers/createObjects/createDraftObject";

import { getDraftsCollectionRef } from "../collections/drafts.collection";
import { getDraftDocRef } from "../docs/drafts.doc";

export const draftsApi = {
  async get(userId: string, chatId: string) {
    const ref = getDraftDocRef(userId, chatId);
    const snapshot = await getDoc(ref);

    return snapshot.exists() ? snapshot.data() : null;
  },

  subscribe(userId: string, callback: (drafts: DraftMessage[]) => void) {
    const q = query(
      getDraftsCollectionRef(userId),
      orderBy("updatedAt", "desc"),
    );

    return onSnapshot(q, (snapshot) => {
      const drafts = snapshot.docs.map((doc) => doc.data());

      callback(drafts);
    });
  },

  createDraft(userId: string, chatId: string, data: CreateDraftInput) {
    const ref = getDraftDocRef(userId, chatId);

    return {
      ref,
      data: createDraftObject(data),
    };
  },

  async remove(userId: string, chatId: string) {
    const ref = getDraftDocRef(userId, chatId);

    await deleteDoc(ref);
  },
};
