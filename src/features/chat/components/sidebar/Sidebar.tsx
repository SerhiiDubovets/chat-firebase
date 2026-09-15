import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { ChatListSection } from "@features/chat/components/sidebar/chatListSection/ChatListSection";
import { SearchBar } from "@features/chat/components/sidebar/searchBar/SearchBar";
import { SidebarHeader } from "@features/chat/components/sidebar/sidebarHeader/SidebarHeader";
import { SettingsPanel } from "@features/settingsPanel/components/settingsPanel/SettingsPanel";
import { useSettingsStore } from "@features/settingsPanel/store/settingsStore";

import * as S from "./sidebar.style";
import { SidebarProps } from "./sidebar.types";

export const Sidebar = ({ input, setInput }: SidebarProps) => {
  const { sidebarView } = useSettingsStore();

  return (
    <S.Sidebar>
      <S.Screen
        initial={false}
        animate={{
          x: sidebarView === "chats" ? "0%" : "-100%",
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}>
        <SidebarHeader />
        <SearchBar input={input} setInput={setInput} />

        <S.ListWrap>
          <OverlayScrollbarsComponent>
            <ChatListSection input={input} />
          </OverlayScrollbarsComponent>
        </S.ListWrap>
      </S.Screen>

      <SettingsPanel />
    </S.Sidebar>
  );
};
