import { toast } from "react-toastify";

import { ChatEmojiPicker } from "@features/chat/components/chatEmojiPicker/ChatEmojiPicker";
import { InputFile } from "@features/chat/components/sendMessage/inputFile/InputFile";
import {
  useChatDraft,
  useMessageText,
  useSendMessage,
} from "@features/chat/hooks";
import { useChatStore } from "@features/chat/store/chatStore";
import { useRequiredChatId } from "@features/user/hooks/useRequiredChatId";

import { SendInputMessage } from "@shared/types/common.types";
import { ButtonIcon, SendButton } from "@shared/ui/buttons";
import { Textarea } from "@shared/ui/textarea/Textarea";

import * as S from "./sendMessage.style";
import { SendMessageProps } from "./sendMessage.types";

export const SendMessage = ({ chatUser, clearSearch }: SendMessageProps) => {
  const { isCurrentUserBlocked, isReceiverUserBlocked } = useChatStore();
  const { sendMessage, isSending } = useSendMessage();
  const { chatId } = useRequiredChatId();

  const { register, handleSubmit, reset, setValue, messageText } =
    useMessageText();

  const { clearDraft } = useChatDraft(chatId, messageText, reset);

  const handleSend = async (data: SendInputMessage) => {
    const text = data.text;

    await sendMessage({
      text,
      chatUser,
      clearDraft,
      clearSearch,
      onError: (msg) => toast.error(msg),
    });
  };

  return (
    <S.Wrap>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.IconsWrap>
          <ChatEmojiPicker messageValue={messageText} setValue={setValue} />
          <ButtonIcon>
            <InputFile
              register={register}
              chatUser={chatUser}
              clearSearch={clearSearch}
            />
          </ButtonIcon>
        </S.IconsWrap>
        <Textarea
          placeholder="Write a message..."
          id="text"
          {...register("text", {
            required: true,
          })}
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
