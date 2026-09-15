import { useEffect } from "react";

import { presenceApi } from "@shared/api/realtime/presence.api";

import { useUserStore } from "../store/userStore";

export const useUserPresence = () => {
  const user = useUserStore((state) => state.currentUser);
  useEffect(() => {
    if (!user?.id) return;
    const unsubscribe = presenceApi.subscribe(user.id);

    return () => unsubscribe();
  }, [user?.id]);
};
