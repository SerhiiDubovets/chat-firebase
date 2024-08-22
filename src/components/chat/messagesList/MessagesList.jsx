import React from "react";
import timeAgo from "../../../lib/timeMessages";
import "./messagesList.css";

const MessagesList = ({ chat, currentUser }) => {
  return chat?.messages?.map((message) => (
    <div
      className={
        message.senderId === currentUser?.id ? "message own" : "message"
      }
      key={message?.createdAt}>
      {message.img && <img src={message.img} alt="" />}
      <div className="textsCenter">
        <p>{message.text}</p>
        <span>{timeAgo(message?.createdAt.seconds)}</span>
      </div>
    </div>
  ));
};

export default MessagesList;
