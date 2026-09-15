import { SystemTheme } from "@shared/types/theme.types";

export const getSystemTheme = (): SystemTheme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
