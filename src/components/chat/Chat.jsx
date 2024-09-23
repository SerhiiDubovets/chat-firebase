import { useEffect, useRef, useState } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import MessagesList from "./messagesList/MessagesList";

import SendMessage from "./sendMessage/SendMessage";

import { MessageStyle } from "./messagesList/messagesList.style";
import {
  MessageBlockStyle,
  BlockMessageStyle,
  CenterChatStyle,
  SelectChatStyle,
  ChatStyle,
  TopChatStyle,
  UserStyle,
  TextStyle,
  IconsStyle,
} from "./chat.style";

const Chat = () => {
  const [chat, setChat] = useState([]);

  const { chatId, user, img } = useChatStore();
  const { currentUser } = useUserStore();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    if (!chatId) return;

    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  return (
    <ChatStyle>
      <TopChatStyle>
        <UserStyle>
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <TextStyle>
            <span>{user?.username}</span>
            <p>Last seen ...</p>
          </TextStyle>
        </UserStyle>
        <IconsStyle>
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </IconsStyle>
      </TopChatStyle>
      <CenterChatStyle>
        <OverlayScrollbarsComponent>
          {chatId ? (
            <BlockMessageStyle>
              <MessagesList chat={chat} currentUser={currentUser} />
            </BlockMessageStyle>
          ) : (
            <SelectChatStyle>
              <p>Select a chat to start a conversation.</p>
            </SelectChatStyle>
          )}
          {img.url && (
            <MessageStyle own>
              <MessageBlockStyle>
                <img src={img.url} alt="" />
              </MessageBlockStyle>
            </MessageStyle>
          )}
          <div ref={endRef}></div>
        </OverlayScrollbarsComponent>
      </CenterChatStyle>
      <SendMessage />
    </ChatStyle>
  );
};

export default Chat;
