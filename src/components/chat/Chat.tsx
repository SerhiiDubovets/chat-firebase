import AvatarIcon from "@assets/avatar.png";
import { getAuth } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect, useRef, useState } from "react";

import { Avatar } from "@/components/avatar/Avatar";
import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";
import SendMessage from "@/components/chat/sendMessage/SendMessage";
import { SetPasswordForm } from "@/components/forms/setPasswordForm/SetPasswordForm";
import { Icon } from "@/components/icon/Icon";
import { LazyImage } from "@/components/lazyImage/LazyImage";
import MessageBubble from "@/components/messageBubble/MessageBubble";
import { useMessages } from "@/hooks/useMessages";
import { CloseIcon, InfOptionsIcon } from "@/icons/icons";

import { db } from "@/lib/firebase";
import {
  getMarkedMessages,
  markMessage,
  unMarkMessage,
} from "@/lib/markMessage";
import { useChatStore } from "@/store/chatStore";
import { useModalStore } from "@/store/modalStore";
import { useUserStore } from "@/store/userStore";
import { ChatMessages } from "@/types/chatMessages.types";
import { MarkedMessage } from "@/types/message.types";
import {
  BlockMessageStyle,
  CenterChatStyle,
  ChatStyle,
  CloseButtonIconStyle,
  IconsStyle,
  MessageBlockStyle,
  SelectChatStyle,
  TextStyle,
  TopChatStyle,
  UserStyle,
} from "./chat.style";

import { MarkedMessagesList } from "./markedMessagesList/MarkedMessagesList";
import { MessageStyle } from "./messageItem/messageItem.style";
import { MessagesList } from "./messagesList/MessagesList";

const Chat = () => {
  const [chat, setChat] = useState<ChatMessages | null>(null);
  const [messageList, setMessageList] = useState<MarkedMessage[]>([]);
  const { openModal } = useModalStore();

  const {
    chatId,
    user,
    img,
    toggleDetail,
    isMarkedMessagesOpen,
    toggleMarkedMessages,
  } = useChatStore();
  const { currentUser } = useUserStore();

  const { messages, loading } = useMessages(chatId);

  const endRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (user && !user.providerData.some((p) => p.providerId === "password")) {
  //     openModal(<SetPasswordForm />);
  //   }
  // }, [openModal, user]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user && !user.providerData.some((p) => p.providerId === "password")) {
      openModal(<SetPasswordForm />);
    }
  }, [openModal, user]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, messageList]);

  useEffect(() => {
    if (!chatId) return;
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data() as ChatMessages);
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  useEffect(() => {
    if (!chatId && !isMarkedMessagesOpen) return;

    const fetchMarkedMessages = async () => {
      try {
        if (!chatId) return;

        const list = await getMarkedMessages(chatId);
        setMessageList(list?.reverse());
      } catch (err) {
        console.error("Error fetching marked messages:", err);
      }
    };

    fetchMarkedMessages();
  }, [chatId, isMarkedMessagesOpen]);

  const handleShowInfo = () => {
    toggleDetail();
  };

  const handleCloseMarkMessageList = () => {
    toggleMarkedMessages();
  };

  const handleMarkMessage = async (message: MarkedMessage) => {
    if (!chatId || !currentUser) return;

    const messageId = message.createdAt.seconds.toString();

    try {
      await markMessage(chatId, messageId, message, currentUser.id);

      console.log("Message marked!");
    } catch (err) {
      console.error("Failed to mark message", err);
    }
    console.log(chatId, messageId, message, currentUser?.id);
  };

  const handleUnMarkMessage = async (id: string) => {
    if (!chatId) return;

    try {
      await unMarkMessage(chatId, id);
      setMessageList((prev) => prev.filter((m) => m.id !== id));
      console.log("Removed from marked messages!");
    } catch (err) {
      console.error("Failed to remove from marked messages", err);
    }
  };

  return (
    <ChatStyle>
      <TopChatStyle>
        <UserStyle>
          <Avatar
            url={user?.avatar || AvatarIcon}
            width="2.5rem"
            height="2.5rem"
          />
          <TextStyle>
            <span>{user?.username}</span>
          </TextStyle>
        </UserStyle>
        <IconsStyle>
          <ButtonIcon
            onClick={handleShowInfo}
            colorIcon="#ffffff"
            widthIcon="1.25rem"
            heightIcon="1.25rem">
            <InfOptionsIcon />
          </ButtonIcon>
        </IconsStyle>
      </TopChatStyle>
      {chatId ? (
        <>
          <CenterChatStyle>
            {isMarkedMessagesOpen && (
              <CloseButtonIconStyle onClick={handleCloseMarkMessageList}>
                <Icon color="#ffffff">
                  <CloseIcon />
                </Icon>
              </CloseButtonIconStyle>
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
                  <div ref={endRef}></div>
                </>
              ) : (
                <>
                  <BlockMessageStyle>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      <MessagesList
                        onHandleAddMark={handleMarkMessage}
                        messages={messages}
                        currentUser={currentUser}
                      />
                    )}
                  </BlockMessageStyle>
                  {img.url && (
                    <BlockMessageStyle>
                      <MessageStyle $own>
                        <MessageBubble own>
                          <MessageBlockStyle>
                            <LazyImage src={img.url} alt="" />
                          </MessageBlockStyle>
                        </MessageBubble>
                      </MessageStyle>
                    </BlockMessageStyle>
                  )}
                  <div ref={endRef}></div>
                  <SendMessage />
                </>
              )}
            </OverlayScrollbarsComponent>
          </CenterChatStyle>
        </>
      ) : (
        <SelectChatStyle>
          <p>Select a chat to start a conversation.</p>
        </SelectChatStyle>
      )}
    </ChatStyle>
  );
};

export default Chat;
