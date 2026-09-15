import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "./detail.css";

import { useCurrentChat, useNewChatUser } from "@features/chat/hooks";
import { useChatStore } from "@features/chat/store/chatStore";
import { useUserStore } from "@features/user/store/userStore";

import { CloseIcon } from "@shared/assets/icons/icons";
import { auth, db } from "@shared/lib/firebase";

import { BlockActionButtons } from "../blockActionButtons/BlockActionButtons";
import { DetailHeader } from "../detailHeader/DetailHeader";
import { SectionAbout } from "../sectionAbout/SectionAbout";
import { SectionMedia } from "../sectionMedia/SectionMedia";
import { UserCard } from "../userCard/UserCard";

import * as S from "./detailsPanel.style";

export const DetailsPanel = () => {
  const {
    user,
    isCurrentUserBlocked,
    isReceiverUserBlocked,
    changeBlock,
    toggleDetail,
    resetChat,
  } = useChatStore();

  const { currentUser, resetUser } = useUserStore();
  const { chat: currentChat, loading: chatLoading } = useCurrentChat();
  const { user: newUser, loading: newUserLoading } = useNewChatUser();

  const chatUser = currentChat?.user ?? newUser;
  const userLoading = chatLoading || newUserLoading;

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
    <S.DetailWrap
      animate={{ x: 0 }}
      initial={{ x: "100%" }}
      exit={{ x: "100%" }}
      transition={{
        type: "tween",
        duration: 0.25,
        ease: "easeInOut",
      }}>
      <DetailHeader />

      <S.InfoWrap>
        <OverlayScrollbarsComponent>
          <UserCard user={chatUser} isUserLoading={userLoading} />

          <SectionAbout user={chatUser} />
          <SectionMedia />

          <BlockActionButtons />

          <S.BanBtnWrap>
            <S.BanBtn onClick={handleBlock}>
              {isCurrentUserBlocked
                ? "You are blocked!"
                : isReceiverUserBlocked
                  ? "User blocked"
                  : "Block User"}
            </S.BanBtn>
            <button className="blockUser logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </S.BanBtnWrap>
        </OverlayScrollbarsComponent>
      </S.InfoWrap>
      <S.CloseBtn onClick={handleShowInfo} size="md" aria-label="Close">
        <CloseIcon />
      </S.CloseBtn>
    </S.DetailWrap>
  );
};
