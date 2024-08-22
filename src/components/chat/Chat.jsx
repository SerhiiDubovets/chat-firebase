import { useEffect, useRef, useState } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import MessagesList from "./messagesList/MessagesList";

import SendMessage from "./sendMessage/SendMessage";

import "./chat.css";
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
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
            <p>Last seen ...</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <OverlayScrollbarsComponent>
          {chatId ? (
            <div className="blockMessage">
              <MessagesList chat={chat} currentUser={currentUser} />
            </div>
          ) : (
            <div className="centerText">
              <p>Select a chat to start a conversation.</p>
            </div>
          )}
          {img.url && (
            <div className="message own">
              <div className="textsCenter">
                <img src={img.url} alt="" />
              </div>
            </div>
          )}
          <div ref={endRef}></div>
        </OverlayScrollbarsComponent>
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;
