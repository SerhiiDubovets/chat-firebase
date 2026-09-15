import { ChatSidebarDetailBtn } from "@features/chat/components/details/components/chatSidebarDetailBtn/ChatSidebarDetailBtn";
import { useChatStore } from "@features/chat/store/chatStore";

import { SettingIcon, StarIcon } from "@shared/assets/icons/icons";

import { BlockActionButtonsStyle } from "./blockActionButtons.style";

export const BlockActionButtons = () => {
  const { toggleMarkedMessages } = useChatStore();

  const handleShowMarkedMessages = async () => {
    toggleMarkedMessages();
  };

  const handleShowSettingsMessages = async () => {
    console.log("SettingsMessages");
  };

  return (
    <BlockActionButtonsStyle>
      <ChatSidebarDetailBtn
        handleOpen={handleShowMarkedMessages}
        title="Marked messages"
        rightIcon>
        <StarIcon />
      </ChatSidebarDetailBtn>
      <ChatSidebarDetailBtn
        handleOpen={handleShowSettingsMessages}
        title="Settings"
        rightIcon>
        <SettingIcon />
      </ChatSidebarDetailBtn>
    </BlockActionButtonsStyle>
  );
};
