import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import { Message } from "@features/chat/types/message.types";

export const messageConverter: FirestoreDataConverter<Message> = {
  toFirestore(message: Message) {
    return message;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Message {
    const data = snapshot.data(options);

    return {
      id: snapshot.id,
      chatId: data.chatId,
      senderId: data.senderId,
      text: data.text ?? null,
      image: data.image ?? null,
      createdAt: data.createdAt,
      seenBy: data.seenBy ?? [],
      editedAt: data.editedAt ?? null,
      deleted: data.deleted ?? false,
      deletedAt: data.deletedAt ?? null,
      deletedFor: data.deletedFor ?? [],
    };
  },
};
