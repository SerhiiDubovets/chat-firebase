import { format, isToday, isYesterday } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatLastSeen = (value?: number | null, locale = enUS) => {
  if (!value) return "";

  const date = new Date(value);

  if (isToday(date)) {
    return `last seen at ${format(date, "HH:mm")}`;
  }

  if (isYesterday(date)) {
    return `last seen yesterday at ${format(date, "HH:mm")}`;
  }

  const now = new Date();

  if (date.getFullYear() === now.getFullYear()) {
    return `last seen ${format(date, "d MMM 'at' HH:mm", {
      locale,
    })}`;
  }

  return `last seen ${format(date, "dd.MM.yy 'at' HH:mm")}`;
};
