import { useChatStore } from "@features/chat/store/chatStore";

import { SendMessageIcon } from "@shared/assets/icons/icons";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";
import { Spinner } from "@shared/ui/spinner/Spinner";

import * as S from "./sendButton.style";
import { SendButtonProps } from "./sendButton.types";

export const SendButton = ({ isSending }: SendButtonProps) => {
  const { isCurrentUserBlocked, isReceiverUserBlocked } = useChatStore();
  return (
    <S.Wrap>
      <ButtonIcon
        type="submit"
        disabled={isCurrentUserBlocked || isReceiverUserBlocked || isSending}>
        {/* {messageValue?.trim() ? <SendMessageIcon /> : <MicrophoneIcon />} */}
        {isSending ? <Spinner /> : <SendMessageIcon />}
      </ButtonIcon>
    </S.Wrap>
  );
};
