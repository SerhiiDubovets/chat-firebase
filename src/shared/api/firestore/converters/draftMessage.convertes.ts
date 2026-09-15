import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import { DraftMessage } from "@features/chat/types/message.types";

export const draftMessageConverter: FirestoreDataConverter<DraftMessage> = {
  toFirestore(draft: DraftMessage) {
    return draft;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): DraftMessage {
    const data = snapshot.data(options);

    return {
      chatId: data.chatId,
      text: data.text ?? "",
      updatedAt: data.updatedAt ?? null,
    };
  },
};
