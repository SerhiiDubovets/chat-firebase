import React from "react";
import timeAgo from "../../../lib/timeMessages";
import MessageBubble from "../../messageBubble/MessageBubble";
import "./messagesList.css";
import { MessageStyle, TimeStyle } from "./messagesList.style";

const MessagesList = ({ chat, currentUser }) => {
  return chat?.messages?.map((message) => (
    <MessageStyle
      own={message.senderId === currentUser?.id}
      key={message?.createdAt}>
      {message.img && <img src={message.img} alt="" />}
      <MessageBubble own={message.senderId === currentUser?.id}>
        <p>{message.text}</p>
        <TimeStyle>{timeAgo(message?.createdAt.seconds)}</TimeStyle>
      </MessageBubble>
    </MessageStyle>
  ));
};

export default MessagesList;
