import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import { Chat } from "@features/chat/types/chat.types";

export const chatConverter: FirestoreDataConverter<Chat> = {
  toFirestore(chat: Chat) {
    return chat;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Chat {
    const data = snapshot.data(options);

    return {
      participants: data.participants ?? [],
      type: data.type ?? "private",
      createdAt: data.createdAt ?? null,
      seenBy: data.seenBy ?? [],
    };
  },
};
