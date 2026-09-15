import { AngleRightIcon } from "@shared/assets/icons/icons";
import { Icon } from "@shared/ui/icon/Icon";

import {
  ChatSidebarDetailBtnStyle,
  ChatSidebarDetailBtnTitleBlockStyle,
  ChatSidebarDetailBtnTitleStyle,
} from "./chatSidebarDetailBtn.style";
import { ChatSidebarDetailBtnProps } from "./chatSidebarDetailBtn.types";

export const ChatSidebarDetailBtn = ({
  children,
  handleOpen,
  title,
  rightIcon,
}: ChatSidebarDetailBtnProps) => {
  return (
    <ChatSidebarDetailBtnStyle onClick={handleOpen}>
      <ChatSidebarDetailBtnTitleBlockStyle>
        <Icon color="#ffffff">{children}</Icon>
        <ChatSidebarDetailBtnTitleStyle>{title}</ChatSidebarDetailBtnTitleStyle>
      </ChatSidebarDetailBtnTitleBlockStyle>
      {rightIcon && (
        <Icon color="#ffffff">
          <AngleRightIcon />
        </Icon>
      )}
    </ChatSidebarDetailBtnStyle>
  );
};
