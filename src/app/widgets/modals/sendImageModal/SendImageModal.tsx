import { toast } from "react-toastify";

import { ChatEmojiPicker } from "@features/chat/components/chatEmojiPicker/ChatEmojiPicker";
import {
  useChatDraft,
  useMessageText,
  useSendMessage,
} from "@features/chat/hooks";
import { useChatStore } from "@features/chat/store/chatStore";
import { useMessageDraftStore } from "@features/chat/store/messageDraftStore";
import { useRequiredChatId } from "@features/user/hooks/useRequiredChatId";

import { useModalStore } from "@shared/store/modalStore";
import { SendInputMessage } from "@shared/types/common.types";
import { SendButton } from "@shared/ui/buttons";
import { LazyImage } from "@shared/ui/lazyImage/LazyImage";
import { Textarea } from "@shared/ui/textarea/Textarea";

import * as S from "./sendImageModal.style";
import { SendImageModalProps } from "./sendImageModal.types";

export const SendImageModal = ({ clearSearch }: SendImageModalProps) => {
  const { image, chatUser } = useMessageDraftStore();
  const { closeModal } = useModalStore();
  const { isCurrentUserBlocked, isReceiverUserBlocked } = useChatStore();
  const { sendMessage, isSending } = useSendMessage();
  const { chatId } = useRequiredChatId();

  const { register, handleSubmit, reset, setValue, messageText } =
    useMessageText();

  const { clearDraft } = useChatDraft(chatId, messageText, reset);

  const handleSend = async (data: SendInputMessage) => {
    const text = data.text;

    const result = await sendMessage({
      text,
      chatUser,
      clearDraft,
      onError: (msg) => toast.error(msg),
      clearSearch,
    });

    if (result.success) {
      closeModal();
    }
  };

  return (
    <S.Wrap>
      <S.Title>Send file</S.Title>
      <S.ImageWrap>
        <LazyImage src={image.url} />
      </S.ImageWrap>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.IconsWrap>
          <ChatEmojiPicker
            messageValue={messageText}
            setValue={setValue}
            disablePortal
          />
        </S.IconsWrap>
        <Textarea
          placeholder="Write a message..."
          id="text"
          {...register("text")}
          submitOnEnter
          isSending={isSending}
          onSubmit={handleSubmit(handleSend)}
          minRows={1}
          maxRows={6}
          maxLength={4000}
          disabled={isCurrentUserBlocked || isReceiverUserBlocked}
        />
        <SendButton isSending={isSending} />
      </S.Form>
    </S.Wrap>
  );
};
