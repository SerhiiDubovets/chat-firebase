import * as S from "./messageBubble.style";
import { MessageBubbleProps } from "./messageBubble.types";

const MessageBubble = ({ children, own, deleted }: MessageBubbleProps) => {
  return (
    <S.Wrap $own={own} $deleted={deleted}>
      {children}
    </S.Wrap>
  );
};

export default MessageBubble;
