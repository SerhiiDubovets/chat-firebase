import { useEffect, useState } from "react";

import { presenceApi, PresenceStatus } from "@shared/api/realtime/presence.api";

export const useUserStatus = (userId: string | null) => {
  const [status, setStatus] = useState<PresenceStatus | null>(null);

  useEffect(() => {
    if (!userId) {
      setStatus(null);
      return;
    }

    return presenceApi.getUserStatus(userId, setStatus);
  }, [userId]);

  return status;
};
