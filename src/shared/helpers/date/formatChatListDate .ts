import { format, isToday, isYesterday } from "date-fns";
import { enUS } from "date-fns/locale";
export const formatChatListDate = (date?: Date, locale = enUS) => {
  if (!date) return "";

  const now = new Date();

  if (isToday(date)) return format(date, "HH:mm");
  if (isYesterday(date)) return "Yesterday";

  if (date.getFullYear() !== now.getFullYear()) {
    return format(date, "d/M/yyyy", { locale });
  }

  return format(date, "d MMMM", { locale });
};
