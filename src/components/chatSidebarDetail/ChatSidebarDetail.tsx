import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "./detail.css";

import { CloseIcon } from "@/icons/icons";
import { auth, db } from "@/lib/firebase";
import { useChatStore } from "@/store/chatStore";
import { useUserStore } from "@/store/userStore";
import { BlockActionButtons } from "./blockActionButtons/BlockActionButtons";
import {
  ChatSidebarDetailBanBtnStyle,
  ChatSidebarDetailCloseBtnStyle,
  ChatSidebarDetailStyle,
  ChatSidebarDetailTitleBlockStyle,
  ChatSidebarDetailTitleStyle,
  ChatSidebarDetailWrapInfoStyle,
  WrapBanBtnStyle,
} from "./chatSidebarDetail.style";
import { SectionAbout } from "./sectionAbout/SectionAbout";
import { SectionMedia } from "./sectionMedia/SectionMedia";
import { UserCard } from "./userCard/UserCard";

const ChatSidebarDetail = () => {
  const {
    user,
    isCurrentUserBlocked,
    isReceiverUserBlocked,
    changeBlock,
    toggleDetail,
    resetChat,
  } = useChatStore();

  const { currentUser, resetUser } = useUserStore();
  const handleBlock = async () => {
    if (!user || !currentUser) return;

    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverUserBlocked
          ? arrayRemove(user.id)
          : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowInfo = () => {
    toggleDetail();
  };

  const handleLogout = () => {
    auth.signOut();
    resetChat();
    resetUser();
  };

  return (
    <ChatSidebarDetailStyle>
      <ChatSidebarDetailTitleBlockStyle>
        <ChatSidebarDetailTitleStyle>Contact info</ChatSidebarDetailTitleStyle>
      </ChatSidebarDetailTitleBlockStyle>
      <ChatSidebarDetailWrapInfoStyle>
        <OverlayScrollbarsComponent>
          <UserCard />

          <SectionAbout />
          <SectionMedia />

          <BlockActionButtons />

          <WrapBanBtnStyle>
            <ChatSidebarDetailBanBtnStyle onClick={handleBlock}>
              {isCurrentUserBlocked
                ? "You are blocked!"
                : isReceiverUserBlocked
                ? "User blocked"
                : "Block User"}
            </ChatSidebarDetailBanBtnStyle>
            <button className="blockUser logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </WrapBanBtnStyle>
        </OverlayScrollbarsComponent>
      </ChatSidebarDetailWrapInfoStyle>
      <ChatSidebarDetailCloseBtnStyle
        onClick={handleShowInfo}
        colorIcon="#ffffff">
        <CloseIcon />
      </ChatSidebarDetailCloseBtnStyle>
    </ChatSidebarDetailStyle>
  );
};

export default ChatSidebarDetail;
