import { useMemo } from "react";

import { useThemeStore } from "@shared/store/themeStore";

import { useSystemTheme } from "./useSystemTheme";

export const useThemeResolver = () => {
  const mode = useThemeStore((s) => s.mode);

  const systemTheme = useSystemTheme();

  const theme = useMemo(
    () => (mode === "system" ? systemTheme : mode),
    [mode, systemTheme],
  );

  return {
    mode,
    theme,
  };
};
