import { useEffect, useState } from "react";

import { getSystemTheme } from "@shared/theme/getSystemTheme";

export const useSystemTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getSystemTheme());

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      setTheme(getSystemTheme());
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);

  return theme;
};
