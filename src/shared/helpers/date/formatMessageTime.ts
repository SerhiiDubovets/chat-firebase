import { format } from "date-fns";

export const formatMessageTime = (
  timestamp: number | string | Date | null | undefined,
): string => {
  if (!timestamp) return "";

  return format(timestamp, "HH:mm");
};
