import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import { ChatMember } from "@features/chat/types/chatMember.types";

export const chatMemberConverter: FirestoreDataConverter<ChatMember> = {
  toFirestore(member) {
    return member;
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): ChatMember {
    const data = snapshot.data(options);

    return {
      lastMessage: data.lastMessage ?? "",
      lastMessageId: data.lastMessageId ?? null,
      lastMessageType: data.lastMessageType ?? null,
      lastMessageSenderId: data.lastMessageSenderId ?? null,
      lastMessageAt: data.lastMessageAt ?? null,
    };
  },
};
