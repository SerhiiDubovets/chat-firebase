import React from "react";

import { Bubble } from "./messageBubble.style";

const MessageBubble = ({ children, own }) => {
  return <Bubble own={own}>{children}</Bubble>;
};

export default MessageBubble;
