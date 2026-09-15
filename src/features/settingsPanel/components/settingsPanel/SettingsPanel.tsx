import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { useSettingsStore } from "@features/settingsPanel/store/settingsStore";

import { BackIcon } from "@shared/assets/icons/icons";

import * as S from "./settingsPanel.style";

export const SettingsPanel = () => {
  const { sidebarView, setSidebarView } = useSettingsStore();
  return (
    <S.Screen
      initial={false}
      animate={{
        x: sidebarView === "settings" ? "0%" : "100%",
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}>
      <button onClick={() => setSidebarView("chats")}>
        <BackIcon />
        Close
      </button>
      <OverlayScrollbarsComponent>
        <div>content</div>
      </OverlayScrollbarsComponent>
      Settings
    </S.Screen>
  );
};
