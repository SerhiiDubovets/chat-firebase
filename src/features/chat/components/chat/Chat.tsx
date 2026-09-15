import { useEffect, useRef, useState } from "react";

import { getAuth } from "firebase/auth";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useOutletContext } from "react-router-dom";

import { ChatOutletContext } from "@pages/chatPage/chatPage.types";

import { SetPasswordForm } from "@features/auth/components/setPasswordForm/SetPasswordForm";
import { ChatHeader } from "@features/chat/components/chatHeader/ChatHeader";
import { MarkedMessagesList } from "@features/chat/components/markedMessagesList/MarkedMessagesList";
import { MessagesList } from "@features/chat/components/messagesList/MessagesList";
import { SendMessage } from "@features/chat/components/sendMessage/SendMessage";
import {
  useCurrentChat,
  useNewChatUser,
} from "@features/chat/hooks/useCurrentChat";
import { useMessages } from "@features/chat/hooks/useMessages";
// import {
//   getMarkedMessages,
//   markMessage,
//   unMarkMessage,
// } from "@features/chat/services/markMessage";
import { useChatStore } from "@features/chat/store/chatStore";
import { MarkedMessage } from "@features/chat/types/message.types";
import { UserOptions } from "@features/user/components/userOptions/UserOptions";
import { useRequiredChatId } from "@features/user/hooks/useRequiredChatId";
import { useUserOptionsStore } from "@features/user/store/userOptionsStore";
import { useUserStore } from "@features/user/store/userStore";

import { CloseIcon } from "@shared/assets/icons/icons";
import { useModalStore } from "@shared/store/modalStore";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./chat.style";
import { BlockMessageStyle } from "./chat.style";

const Chat = () => {
  const { clearSearch } = useOutletContext<ChatOutletContext>();
  const [messageList, setMessageList] = useState<MarkedMessage[]>([]);

  console.log(messageList);

  const endRef = useRef<HTMLDivElement | null>(null);

  const { chatId } = useRequiredChatId();

  const { openModal } = useModalStore();
  const { isOpen } = useUserOptionsStore();
  const { isMarkedMessagesOpen, toggleMarkedMessages } = useChatStore();

  const { currentUser } = useUserStore();
  const { messages, loading } = useMessages({
    chatId,
    userId: currentUser?.id ?? null,
  });

  const { chat: currentChat, loading: chatLoading } = useCurrentChat();

  const { user: newUser, loading: newUserLoading } = useNewChatUser();

  const chatUser = currentChat?.user ?? newUser;

  useEffect(() => {
    const auth = getAuth();
    const firebaseUser = auth.currentUser;

    if (
      firebaseUser &&
      !firebaseUser.providerData.some((p) => p.providerId === "password")
    ) {
      openModal(<SetPasswordForm />);
    }
  }, [openModal]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, messageList]);

  useEffect(() => {
    if (!isMarkedMessagesOpen) return;
    if (!chatId) return;
    setMessageList([]);
    // const fetchMarkedMessages = async () => {
    //   try {
    //     const list = await getMarkedMessages(chatId);
    //     setMessageList(list?.reverse() || []);
    //   } catch (err) {
    //     console.error("Error fetching marked messages:", err);
    //   }
    // };

    // fetchMarkedMessages();
  }, [chatId, isMarkedMessagesOpen]);

  if (!currentUser) {
    return null;
  }

  const handleMarkMessage = async (message: MarkedMessage) => {
    if (!currentUser) return;
    if (!chatId) return;
    console.log(message);

    // const messageId = message.createdAt.seconds.toString();
    // try {
    //   await markMessage(chatId, messageId, message, currentUser.id);

    //   console.log("Message marked!");
    // } catch (err) {
    //   console.error("Failed to mark message", err);
    // }
  };

  const handleUnMarkMessage = async (id: string) => {
    console.log(id);

    // try {
    //   await unMarkMessage(chatId, id);
    //   setMessageList((prev) => prev.filter((m) => m.id !== id));
    //   console.log("Removed from marked messages!");
    // } catch (err) {
    //   console.error("Failed to remove from marked messages", err);
    // }
  };

  const handleCloseMarked = () => toggleMarkedMessages();

  const isHeaderLoading = chatLoading || newUserLoading;

  if (isOpen) {
    return (
      <S.ChatWrap>
        {chatUser && <ChatHeader user={chatUser} loading={isHeaderLoading} />}
        <S.Chat>
          <UserOptions />
        </S.Chat>
      </S.ChatWrap>
    );
  }

  return (
    <S.ChatWrap>
      <ChatHeader user={chatUser} loading={isHeaderLoading} />

      <S.Chat>
        {isMarkedMessagesOpen && (
          <S.CloseButton onClick={handleCloseMarked} color="#ffffff">
            <Icon>
              <CloseIcon />
            </Icon>
          </S.CloseButton>
        )}

        <OverlayScrollbarsComponent>
          {isMarkedMessagesOpen ? (
            <>
              <BlockMessageStyle>
                <MarkedMessagesList
                  onHandleUnMark={handleUnMarkMessage}
                  messages={messageList}
                />
              </BlockMessageStyle>
              <div ref={endRef} />
            </>
          ) : (
            <>
              <BlockMessageStyle>
                <MessagesList
                  onHandleAddMark={handleMarkMessage}
                  messages={messages}
                  isLoading={loading}
                  currentUser={currentUser}
                />
              </BlockMessageStyle>

              <div ref={endRef} />
            </>
          )}
        </OverlayScrollbarsComponent>
      </S.Chat>
      {chatUser && (
        <SendMessage chatUser={chatUser} clearSearch={clearSearch} />
      )}
    </S.ChatWrap>
  );
};

export default Chat;
