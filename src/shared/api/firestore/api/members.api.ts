import {
  collectionGroup,
  getDoc,
  onSnapshot,
  WriteBatch,
} from "firebase/firestore";

import {
  ChatMember,
  ChatMemberItem,
} from "@features/chat/types/chatMember.types";

import { getMemberDocRef } from "@shared/api/firestore/docs/members.doc";
import {
  CreateChatMemberInput,
  createChatMemberObject,
} from "@shared/helpers/createObjects/createChatMemberObject";
import { db } from "@shared/lib/firebase";

type UpdateParams = {
  chatId: string;
  userId: string;
  data: CreateChatMemberInput;
};

type UpdateBatchParams = UpdateParams & {
  batch: WriteBatch;
};

export const membersApi = {
  subscribe(userId: string, callback: (members: ChatMemberItem[]) => void) {
    const q = collectionGroup(db, "members");

    return onSnapshot(q, (snapshot) => {
      const members = snapshot.docs
        .filter((doc) => doc.id === userId)
        .map((doc) => ({
          chatId: doc.ref.parent.parent?.id ?? "",
          ...(doc.data() as ChatMember),
        }));

      callback(members);
    });
  },

  async get(chatId: string, userId: string) {
    const ref = getMemberDocRef(chatId, userId);
    const snapshot = await getDoc(ref);

    return snapshot.exists() ? snapshot.data() : null;
  },

  async getMap(chatIds: string[], userId: string) {
    const entries = await Promise.all(
      chatIds.map(async (chatId) => {
        const member = await this.get(chatId, userId);

        return [chatId, member] as const;
      }),
    );

    return new Map(entries);
  },

  update({ chatId, userId, data }: UpdateParams) {
    const ref = getMemberDocRef(chatId, userId);

    return {
      ref,
      data: createChatMemberObject(data),
    };
  },

  updateBatch({ batch, chatId, userId, data }: UpdateBatchParams) {
    const ref = getMemberDocRef(chatId, userId);
    const memberData = createChatMemberObject(data);

    batch.set(ref, memberData, { merge: true });
  },
};
