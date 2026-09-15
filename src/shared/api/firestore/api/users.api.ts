import {
  documentId,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { CreateUserInput } from "@features/auth/types/auth.types";
import { ChatUser } from "@features/user/types/user.types";

import { getUsersCollectionRef } from "@shared/api/firestore/collections/users.collection";
import { getUserRef } from "@shared/api/firestore/docs/users.doc";
import { chunkArray } from "@shared/helpers/chunkArray";
import { createUserObject } from "@shared/helpers/createObjects/createUserObject";

export const usersApi = {
  async getById(id: string): Promise<ChatUser | null> {
    const snap = await getDoc(getUserRef(id));
    return snap.exists() ? (snap.data() as ChatUser) : null;
  },

  async getUsersByIds(ids: string[]): Promise<ChatUser[]> {
    if (ids.length === 0) return [];

    const chunks = chunkArray(ids, 10);

    const snapshots = await Promise.all(
      chunks.map((chunk) => {
        const q = query(
          getUsersCollectionRef,
          where(documentId(), "in", chunk),
        );
        return getDocs(q);
      }),
    );

    return snapshots.flatMap((snapshot) =>
      snapshot.docs.map((doc) => doc.data()),
    );
  },

  async create(input: CreateUserInput): Promise<ChatUser> {
    const user = createUserObject(input);
    await setDoc(getUserRef(input.id), user);
    return user;
  },

  async updateLastSeen(id: string) {
    return updateDoc(getUserRef(id), {
      lastSeen: serverTimestamp(),
    });
  },

  async createIfNotExists(input: CreateUserInput): Promise<ChatUser> {
    const existing = await usersApi.getById(input.id);

    if (existing) {
      await usersApi.updateLastSeen(input.id);
      return existing;
    }

    return usersApi.create(input);
  },

  async searchUsers(searchValue: string, limitCount = 10): Promise<ChatUser[]> {
    const q = query(
      getUsersCollectionRef,
      where("username_lower", ">=", searchValue),
      where("username_lower", "<=", searchValue + "\uf8ff"),
      limit(limitCount),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  },
};
