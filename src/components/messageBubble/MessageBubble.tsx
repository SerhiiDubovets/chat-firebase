import { BubbleStyle } from "./messageBubble.style";
import { MessageBubbleProps } from "./messageBubble.types";

const MessageBubble = ({ children, own }: MessageBubbleProps) => {
  return <BubbleStyle $own={own}>{children}</BubbleStyle>;
};

export default MessageBubble;
