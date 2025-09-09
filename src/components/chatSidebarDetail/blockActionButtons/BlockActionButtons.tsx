import { ChatSidebarDetailBtn } from "@/components/buttons/chatSidebarDetailBtn/ChatSidebarDetailBtn";
import { SettingIcon, StarIcon } from "@/icons/icons";
import { useChatStore } from "@/store/chatStore";
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
