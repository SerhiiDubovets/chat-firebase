import {
  onDisconnect,
  onValue,
  ref,
  serverTimestamp,
  set,
} from "firebase/database";

import { rtdb } from "@shared/lib/firebase";

import { realtimePaths } from "./realtimePaths";

export interface PresenceStatus {
  online: boolean;
  lastSeen: number;
}

export const presenceApi = {
  subscribe(userId: string) {
    const connectedRef = ref(rtdb, ".info/connected");
    const userStatusRef = ref(rtdb, realtimePaths.userStatus(userId));

    const unsubscribe = onValue(connectedRef, async (snapshot) => {
      if (snapshot.val() !== true) {
        return;
      }

      await onDisconnect(userStatusRef).set({
        online: false,
        lastSeen: serverTimestamp(),
      });

      await set(userStatusRef, {
        online: true,
      });
    });

    return unsubscribe;
  },

  getUserStatus(
    userId: string,
    callback: (status: PresenceStatus | null) => void,
  ) {
    const statusRef = ref(rtdb, realtimePaths.userStatus(userId));

    return onValue(statusRef, (snapshot) => {
      callback(snapshot.val());
    });
  },
};
