import { PresenceStatus } from "@shared/api/realtime/presence.api";
import { formatLastSeen } from "@shared/helpers/date/formatLastSeen";

export const formatUserStatus = (status: PresenceStatus | null) => {
  if (!status) return "";

  if (status.online) {
    return "Online";
  }

  if (status.lastSeen) {
    return formatLastSeen(status.lastSeen);
  }

  return "";
};
