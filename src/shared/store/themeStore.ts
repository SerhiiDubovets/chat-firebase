import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ThemeMode } from "@shared/types/theme.types";

interface ThemeStore {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "system",

      setMode: (mode) => set({ mode }),
    }),
    {
      name: "theme",
    },
  ),
);
