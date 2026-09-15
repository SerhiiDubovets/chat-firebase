import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

import { ChatUser } from "@features/user/types/user.types";

export const userConverter: FirestoreDataConverter<ChatUser> = {
  toFirestore(user: ChatUser) {
    return user;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): ChatUser {
    const data = snapshot.data(options);

    return {
      id: snapshot.id,
      username: data.username ?? "Unknown",
      email: data.email ?? null,
      avatar: data.avatar ?? null,
      avatarPath: data.avatarPath ?? null,
      about: data.about ?? "",
      blocked: data.blocked ?? [],
      lastSeen: data.lastSeen ?? 0,
      username_lower: data.username_lower ?? data.username?.toLowerCase() ?? "",
    };
  },
};
