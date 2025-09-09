import ChatList from "./chatList/ChatList";
import { SidebarStyle } from "./sidebar.style";

import UserInfo from "./userInfo/UserInfo";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <UserInfo />
      <ChatList />
    </SidebarStyle>
  );
};

export { Sidebar };
