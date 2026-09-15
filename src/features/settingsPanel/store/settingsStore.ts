import { create } from "zustand";

import { SidebarView } from "@features/settingsPanel/types/sidebarView.types";

interface SettingsStore {
  sidebarView: SidebarView;

  setSidebarView: (view: SidebarView) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  sidebarView: "chats",

  setSidebarView: (view) => set({ sidebarView: view }),
}));
