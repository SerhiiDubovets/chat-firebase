import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";

import { DetailsPanel } from "@features/chat/components/details/components/detailsPanel/DetailPanel";
import { Sidebar } from "@features/chat/components/sidebar/Sidebar";
import { useCurrentChat, useNewChatUser } from "@features/chat/hooks";
import { useChatStore } from "@features/chat/store/chatStore";

import * as S from "./chatPage.style";

const ChatPage = () => {
  const { chatId } = useParams();
  const { isDetailOpen } = useChatStore();
  const [input, setInput] = useState("");

  const { chat: currentChat, loading: chatLoading } = useCurrentChat();

  const { user: newUser, loading: newUserLoading } = useNewChatUser();

  const chatUser = currentChat?.user ?? newUser;

  const clearSearch = () => {
    setInput("");
  };

  return (
    <S.ChatWrap>
      <Sidebar input={input} setInput={setInput} />
      <Outlet context={{ clearSearch }} />

      <AnimatePresence>
        {chatUser?.id && !isDetailOpen && <DetailsPanel />}
      </AnimatePresence>
    </S.ChatWrap>
  );
};

export default ChatPage;
