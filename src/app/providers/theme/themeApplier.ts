import { useLayoutEffect } from "react";

import { useThemeResolver } from "@app/providers/hooks/useTheme";

export const ThemeApplier = () => {
  const { theme } = useThemeResolver();

  useLayoutEffect(() => {
    const root = document.documentElement;

    if (root.dataset.theme === theme) return;

    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  }, [theme]);

  return null;
};
